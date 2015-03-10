var CharacterUtils = require('../utils/CharacterUtils');
var AjaxUtils = require("../utils/AjaxUtils");
var $ = require('jquery');

var CharacterWebApiUtils = {

  getAllSeries: function( successCallback ) {
    $.get( "http://localhost:35992/api/character" )
      .done(function( data) {
        successCallback( data );
      });
  },
  postSeries: function( title, successCallback, errorCallback ) {
    var series = SeriesUtils.getCreatedSeriesData( title );
    $.ajax({
      type: "POST",
      url: "http://localhost:35992/api/character",
      data: JSON.stringify(series),
      contentType: "application/json"
    })
      .done(function( createdSeries ) {
        successCallback(createdSeries, null);
      })
      .fail(function (jqXhr) {
        var errors = AjaxUtils.getValidationErrorsFromJqXhr(jqXhr);
        errorCallback(errors);
      });


  }

};

module.exports = CharacterWebApiUtils;