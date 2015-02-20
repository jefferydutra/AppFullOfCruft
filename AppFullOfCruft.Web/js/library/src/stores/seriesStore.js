/**
 * Created by Jeff on 19/02/2015.
 */
var AppDispatcher = require('../dispatcher/AppDispatcher');
var EventEmitter = require('events').EventEmitter;
var SeriesConstants = require('../constants/SeriesConstants');
var assign = require('object-assign');


var CHANGE_EVENT = 'change';

var _series
  = {};

/**
 * Create a SERIES_COMPLETE item.
 * @param  {string} text The content of the SERIES_COMPLETE
 */
function create(text) {
  // Hand waving here -- not showing how this interacts with XHR or persistent
  // server-side storage.
  // Using the current timestamp + random number in place of a real id.
  var id = (+new Date() + Math.floor(Math.random() * 999999)).toString(36);
  _series
    [id] = {
    id: id,
    complete: false,
    text: text
  };
}

/**
 * Update a SERIES_COMPLETE item.
 * @param  {string} id
 * @param {object} updates An object literal containing only the data to be
 *     updated.
 */
function update(id, updates) {
  _series
    [id] = assign({}, _series
    [id], updates);
}

/**
 * Delete a SERIES_COMPLETE item.
 * @param  {string} id
 */
function destroy(id) {
  delete _series
    [id];
}

/**
 * Delete all the completed SERIES_COMPLETE items.
 */
function destroyCompleted() {
  for (var id in _series
    ) {
    if (_series
        [id].complete) {
      destroy(id);
    }
  }
}

var SeriesStore = assign({}, EventEmitter.prototype, {
  /**
   * Get the entire collection of SERIES_COMPLETEs.
   * @return {object}
   */
  updateSeriesData: function(data){
    _series = data;
    // tell the Component that this store changed
    SeriesStore.emitChange();
  },

  loadAll: function() {
    $.getJSON( SeriesConstants.APIEndpoints.SERIES )
      .done(function() {
        console.log( "second success" );
          updateSeriesData();
      });
  },

  emitChange: function() {
    this.emit(CHANGE_EVENT);
  },

  /**
   * @param {function} callback
   */
  addChangeListener: function(callback) {
    this.on(CHANGE_EVENT, callback);
  },

  /**
   * @param {function} callback
   */
  removeChangeListener: function(callback) {
    this.removeListener(CHANGE_EVENT, callback);
  }
});

// Register callback to handle all updates
AppDispatcher.register(function(action) {
  var text;

  switch(action.actionType) {
    case SeriesConstants.ActionTypes.SERIES_COMPLETE_CREATE:
      text = action.text.trim();
      if (text !== '') {
        create(text);
      }
      SeriesStore.emitChange();
      break;

    case SeriesConstants.ActionTypes.SERIES_COMPLETE_COMPLETE:
      update(action.id, {complete: true});
      SeriesStore.emitChange();
      break;

    case SeriesConstants.ActionTypes.SERIES_COMPLETE_UPDATE_TEXT:
      text = action.text.trim();
      if (text !== '') {
        update(action.id, {text: text});
      }
      SeriesStore.emitChange();
      break;

    case SeriesConstants.ActionTypes.SERIES_COMPLETE_DESTROY:
      destroy(action.id);
      SeriesStore.emitChange();
      break;

    case SeriesConstants.ActionTypes.SERIES_COMPLETE_DESTROY_COMPLETED:
      destroyCompleted();
      SeriesStore.emitChange();
      break;

    default:
    // no op
  }
});

module.exports = SeriesStore;