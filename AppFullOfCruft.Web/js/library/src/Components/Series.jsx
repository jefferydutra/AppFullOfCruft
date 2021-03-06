var React = require("React");
var SeriesList = require("./SeriesList.jsx");
var CharacterManager = require("./CharacterManager.jsx");

var Router = require('react-router');


var NavigationTabs = React.createClass({

  mixins: [ Router.Navigation, Router.State ],
  getInitialState: function() {
    // naming it initialX clearly indicates that the only purpose
    // of the passed down prop is to initialize something internally
    return {navType: this.props.intialNavType};
  },
  render: function(){
    var selectedSeriesId = this.getParams().id;
    return (
      <div className="row">
        <div className="col-md-2">
          <SeriesList
            selectedSeriesId={selectedSeriesId}/>
        </div>
        <div className="col-md-offset-1 col-md-9">
           <CharacterManager/>
        </div>
      </div>
    );
  }
});

module.exports = NavigationTabs;