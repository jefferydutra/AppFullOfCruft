var React = require("React");
var NavigationPane = require("./NavigationPane.jsx");

var CharacterManager = React.createClass({
  render: function() {
    return (
      <div className="row">
        <div className="col-md-3">
          <NavigationPane/>
        </div>
        <div className="col-md-9">
          content
        </div>
      </div>
    );
  }
});

module.exports = CharacterManager;