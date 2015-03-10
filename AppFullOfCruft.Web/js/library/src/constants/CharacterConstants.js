/**
 * Created by Jeff on 19/02/2015.
 */
var keyMirror = require('keymirror');


var APIRoot = "http://localhost:35992/";

module.exports = {
  APIEndpoints: {
    SERIES:        APIRoot + "api/character"
  },
  ActionTypes: keyMirror({
    CHARACTER_CREATE: null,
    RECEIVE_RAW_CHARACTERS: null,
    RECEIVE_RAW_CREATED_CHARACTER: null,
    RECEIVE_VALIDATION_ERRORS: null
  }),
  PayloadSources: keyMirror({
    SERVER_ACTION: null,
    VIEW_ACTION: null
  })
};
