/**
 * Created by Jeff on 21/02/2015.
 */
var SeriesUtils = require('../utils/SeriesUtils');
var $ = require('jquery');

var SeriesWebApiUtils = {

  getAllSeries: function( successCallback ) {
    $.get( "http://localhost:35992/api/series" )
      .done(function( data) {
        successCallback( data );
      });
  },
  postSeries: function( title, successCallback ) {
    var series = SeriesUtils.getCreatedSeriesData( title );
    $.ajax({
      type: "POST",
      url: "http://localhost:35992/api/series",
      data: JSON.stringify(series),
      contentType: "application/json"
    })
      .done(function( createdSeries ) {
        successCallback(createdSeries);
      });


  }

};

module.exports = SeriesWebApiUtils;