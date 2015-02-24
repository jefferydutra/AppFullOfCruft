var Router = require('react-router'); // or var Router = ReactRouter; in browsers
var React = require("React");
var Series = require("./Series.jsx");


var DefaultRoute = Router.DefaultRoute;
var Link = Router.Link;
var Route = Router.Route;
var RouteHandler = Router.RouteHandler;

var App = React.createClass({
  render: function () {
    return (
      <div>
          <ul className="nav nav-bar">
            <li role="presentation">
              <Link to="app">
                App
              </Link>
            </li>
            <li role="presentation">
              <Link to="series">
                Series
              </Link>
            </li>
          </ul>
        {/* this is the important part */}
        <RouteHandler/>
      </div>
    );
  }
});

var routes = (
  <Route name="app" path="/" handler={App}>
    <Route name="series" handler={Series}/>
    <DefaultRoute handler={App}/>
  </Route>
);



module.exports = routes;

