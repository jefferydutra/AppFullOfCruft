/**
 * Created by Jeff on 19/02/2015.
 */
var keyMirror = require('keymirror');


var APIRoot = "http://localhost:35992/";

module.exports = {
  APIEndpoints: {
    SERIES:        APIRoot + "api/series"
  },
  ActionTypes: keyMirror({
    SERIES_CREATE: null,
    RECEIVE_RAW_MESSAGES: null,
    RECEIVE_RAW_CREATED_SERIES: null,
    RECEIVE_VALIDATION_ERRORS: null
  }),
  PayloadSources: keyMirror({
    SERVER_ACTION: null,
    VIEW_ACTION: null
  })
};
