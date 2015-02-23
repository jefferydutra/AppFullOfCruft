/**
 * Created by Jeff on 21/02/2015.
 */
var SeriesActionCreators = require('../action/SeriesActionCreators');
var SeriesUtils = require('../utils/SeriesUtils');
var $ = require('jquery');

var SeriesWebApiUtils = {

  getAllSeries: function() {
    $.get( "http://localhost:35992/api/series" )
      .done(function( data) {
        SeriesActionCreators.receiveAll( data );
      });
  },
  postSeries: function( title ) {
    var series = SeriesUtils.getCreatedSeriesData( title );
    $.ajax({
      type: "POST",
      url: "http://localhost:35992/api/series",
      data: JSON.stringify(series),
      contentType: "application/json"
    })
      .done(function( createdSeries ) {
        SeriesActionCreators.receiveCreatedSeries(createdSeries);
      });


  }

};

module.exports = SeriesWebApiUtils;