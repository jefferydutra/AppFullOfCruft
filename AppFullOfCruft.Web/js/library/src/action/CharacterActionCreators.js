var AppDispatcher = require('../dispatcher/AppDispatcher');
var CharacterConstants = require('../constants/CharacterConstants');
var CharacterWebApiUtils = require('../utils/CharacterWebApiUtils');

var CharacterActions = {

  /**
   * @param  {string} title
   */
  create: function( title ) {
    AppDispatcher.handleViewAction({
      actionType: CharacterConstants.ActionTypes.SERIES_CREATE,
      text: title
    });
    CharacterWebApiUtils.postSeries( title, CharacterActions.receiveCreatedSeries, CharacterActions.receiveValidationErrors );
  },
  receiveCreatedSeries: function( createdSeries ){
    AppDispatcher.handleServerAction({
      type: CharacterConstants.ActionTypes.RECEIVE_RAW_CREATED_SERIES,
      rawSeries: createdSeries
    });
  },
  receiveValidationErrors: function( validationErrors ){
    AppDispatcher.handleServerAction({
      type: CharacterConstants.ActionTypes.RECEIVE_VALIDATION_ERRORS,
      validationErrors: validationErrors
    });
  },
  receiveAll: function( rawNodes ) {
    AppDispatcher.handleServerAction({
      type: CharacterConstants.ActionTypes.RECEIVE_RAW_MESSAGES,
      rawNodes: rawNodes
    });
  },

  loadAll: function(){
    CharacterWebApiUtils.getAllSeries(CharacterActions.receiveAll);
  },
  /**
   * @param  {string} id The ID of the ToDo item
   * @param  {string} text
   */
  updateText: function(id, text) {
    AppDispatcher.dispatch({
      actionType: CharacterConstants.SERIES_UPDATE_TEXT,
      id: id,
      text: text
    });
  },

  /**
   * @param  {string} id
   */
  destroy: function(id) {
    AppDispatcher.dispatch({
      actionType: CharacterConstants.SERIES_DESTROY,
      id: id
    });
  },

  /**
   * Delete all the completed ToDos
   */
  destroyCompleted: function() {
    AppDispatcher.dispatch({
      actionType: CharacterConstants.SERIES_DESTROY_COMPLETED
    });
  }

};

module.exports = CharacterActions;