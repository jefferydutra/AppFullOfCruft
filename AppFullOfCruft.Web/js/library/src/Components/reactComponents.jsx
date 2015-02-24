var React = require("React");
var CharacterManager = require("./CharacterManager.jsx");
var SeriesWebAPIUtils = require('../utils/SeriesWebApiUtlis');

SeriesWebAPIUtils.getAllSeries();

window.reactElements = {};
window.reactElements.loadCharacterManager= function(domId){
  React.render(
    <CharacterManager />,
    document.getElementById(domId)
  );
};