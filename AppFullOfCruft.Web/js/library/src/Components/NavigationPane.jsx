var React = require("React");
var NavigationTabs = require("./NavigationTabs.jsx");

var NavigationPane = React.createClass({
  render: function(){
    return (
      <div>
        <div className="row">
          <div className="col-md-12">
            <NavigationTabs/>
          </div>
        </div>
      </div>
    );
  }
});

module.exports = NavigationPane;

