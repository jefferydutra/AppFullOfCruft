var AppDispatcher = require('../dispatcher/AppDispatcher');
var SeriesConstants = require('../constants/SeriesConstants');
var SeriesWebApiUtils = require('../utils/SeriesWebApiUtlis');
var SeriesUtils = require('../utils/SeriesUtils');

var SeriesActions = {

  /**
   * @param  {string} title
   */
  create: function( title ) {
    AppDispatcher.handleViewAction({
      actionType: SeriesConstants.ActionTypes.SERIES_CREATE,
      text: title
    });
    var series = SeriesUtils.getCreatedSeriesData( title );
    SeriesWebApiUtils.postSeries( series );
  },
  receiveCreatedSeries: function( createdSeries ){
    AppDispatcher.handleServerAction({
      type: SeriesConstants.ActionTypes.RECEIVE_RAW_CREATED_SERIES,
      rawSeries: createdSeries
    });
  },
  receiveAll: function( rawNodes ) {
    AppDispatcher.handleServerAction({
      type: SeriesConstants.ActionTypes.RECEIVE_RAW_MESSAGES,
      rawNodes: rawNodes
    });
  },

  /**
   * @param  {string} id The ID of the ToDo item
   * @param  {string} text
   */
  updateText: function(id, text) {
    AppDispatcher.dispatch({
      actionType: SeriesConstants.SERIES_UPDATE_TEXT,
      id: id,
      text: text
    });
  },

  /**
   * @param  {string} id
   */
  destroy: function(id) {
    AppDispatcher.dispatch({
      actionType: SeriesConstants.SERIES_DESTROY,
      id: id
    });
  },

  /**
   * Delete all the completed ToDos
   */
  destroyCompleted: function() {
    AppDispatcher.dispatch({
      actionType: SeriesConstants.SERIES_DESTROY_COMPLETED
    });
  }

};

module.exports = SeriesActions;