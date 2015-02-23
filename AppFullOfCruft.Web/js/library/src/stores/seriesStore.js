/**
 * Created by Jeff on 19/02/2015.
 */
var AppDispatcher = require('../dispatcher/AppDispatcher');
var EventEmitter = require('events').EventEmitter;
var SeriesConstants = require('../constants/SeriesConstants');
var assign = require('object-assign');


var CHANGE_EVENT = 'change';

var _series
  = [];

/**
 * Delete a SERIES_COMPLETE item.
 * @param  {string} id
 */
function destroy( id ) {
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
  updateSeriesData: function( data ){
    _series = data;
    // tell the Component that this store changed
    SeriesStore.emitChange();
  },
  init: function( rawMessages ) {
    rawMessages.forEach(function( series ) {
      var seriesId = series.id;
      _series[seriesId] = {
        id: seriesId,
        title: series.title
      };
    }, this);
  },
  addSeries: function( rawSeries ) {
    var seriesId = rawSeries.id;
    _series[seriesId] = {
      id: seriesId,
      title: rawSeries.title
    };
  },
  getAll: function() {
    return _series;
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
  }
});

// Register callback to handle all updates
AppDispatcher.register(function( payload ) {
  var action = payload.action;

  switch( action.type ) {

    case SeriesConstants.ActionTypes.RECEIVE_RAW_MESSAGES:
      SeriesStore.init( action.rawNodes );
      SeriesStore.emitChange();
      break;

    case SeriesConstants.ActionTypes.RECEIVE_RAW_CREATED_SERIES:
      SeriesStore.addSeries(action.rawSeries);
      SeriesStore.emitChange();
      break;

    case SeriesConstants.ActionTypes.SERIES_COMPLETE_DESTROY:
      destroy( action.id );
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