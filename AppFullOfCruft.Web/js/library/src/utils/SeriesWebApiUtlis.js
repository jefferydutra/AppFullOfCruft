/**
 * Created by Jeff on 21/02/2015.
 */
var SeriesActionCreators = require('../actions/SeriesActionCreators');

module.exports = {

  getAllSeries: function() {
    // simulate retrieving data from a database
    var rawNodes = JSON.parse(localStorage.getItem('series'));
    $.get( "http://localhost:35992/api/series")
      .done(function(data) {
        console.log( "second success" );
        SeriesActionCreators.receiveAll(data);
      });
  }

};