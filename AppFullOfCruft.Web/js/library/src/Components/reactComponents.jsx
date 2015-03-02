var React = require("React");
var SeriesActionCreators = require('../action/SeriesActionCreators');
var Router = require('react-router');
var Series = require("./Series.jsx");
var CharacterManager = require("./CharacterManager.jsx");


var DefaultRoute = Router.DefaultRoute;
var Link = Router.Link;
var Route = Router.Route;
var RouteHandler = Router.RouteHandler;


SeriesActionCreators.loadAll();

window.reactElements = {};
window.reactElements.loadCharacterManager= function(domId){
  //React.render(
  //  <CharacterManager />,
  //  document.getElementById(domId)
  //);
};


var App = React.createClass({
  render: function () {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-3">
            <ul className="nav nav-tabs">
              <li role="presentation"><Link to="app">Dashboard</Link></li>
              <li role="presentation"><Link to="series">Series</Link></li>
              <li role="presentation"><Link to="calendar">Calendar</Link></li>
            </ul>
          </div>
          <div className="col-md-9">
              <h2>Title</h2>
          </div>
        </div>
        <RouteHandler/>
      </div>
    );
  }
});

var routes = (
  <Route name="app" path="/" handler={App}>
    <Route name="series" path="/series/:id?" handler={Series}/>
    <Route name="calendar" handler={Series}/>
    <DefaultRoute handler={Series}/>
  </Route>
);

Router.run(routes, function (Handler) {
  React.render(<Handler/>, document.body);
});




