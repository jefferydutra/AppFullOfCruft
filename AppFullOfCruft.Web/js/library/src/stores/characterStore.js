/**
 * Created by Jeff on 19/02/2015.
 */
var AppDispatcher = require('../dispatcher/AppDispatcher');
var EventEmitter = require('events').EventEmitter;
var CharacterConstants = require('../constants/CharacterConstants');
var assign = require('object-assign');


var CHANGE_EVENT = 'change';

var
  _characters = [],
  _validationErrors = [];

var CharacterStore = assign({}, EventEmitter.prototype, {
  /**
   * Get the entire collection of SERIES_COMPLETEs.
   * @return {object}
   */
  updateCharacterData: function( data ){
    _characters = data;
    // tell the Component that this store changed
    CharacterStore.emitChange();
  },
  init: function( rawMessages ) {
    rawMessages.forEach(function( series ) {
      var seriesId = series.id;
      _characters[seriesId] = {
        id: seriesId,
        title: series.title
      };
    }, this);
  },
  addCharacter: function( rawSeries ) {
    var seriesId = rawSeries.id;
    _characters[seriesId] = {
      id: seriesId,
      title: rawSeries.title
    };
  },
  getAll: function() {
    return _characters;
  },

  emitChange: function() {
    this.emit( CHANGE_EVENT );
  },

  /**
   * @param {function} callback
   */
  addChangeListener: function( callback ) {
    this.on( CHANGE_EVENT, callback );
  },

  /**
   * @param {function} callback
   */
  removeChangeListener: function( callback ) {
    this.removeListener(CHANGE_EVENT, callback);
  },

  getAllValidationErrors: function(){
    return _validationErrors;
  }
});

// Register callback to handle all updates
AppDispatcher.register(function( payload ) {
  var action = payload.action;

  switch( action.type ) {

    case CharacterConstants.ActionTypes.RECEIVE_RAW_MESSAGES:
      CharacterStore.init( action.rawNodes );
      CharacterStore.emitChange();
      break;

    case CharacterConstants.ActionTypes.RECEIVE_RAW_CREATED_SERIES:
      CharacterStore.addCharacter( action.rawSeries );
      CharacterStore.emitChange();
      break;

    case CharacterConstants.ActionTypes.RECEIVE_VALIDATION_ERRORS:
      _validationErrors = action.validationErrors;
      CharacterStore.emitChange();
      break;

    default:
    // no op
  }
});

module.exports = CharacterStore;