var React = require("React");

var SeriesList = React.createClass({
  render: function(){
    return (
      <div>
        <div className="btn btn-info">
          Test button <span className="pull-right">(4)</span>
        </div>
        <div className="alert alert-success"></div>
        <div className="alert alert-success">Amazing Spiderman</div>
        <div className="alert alert-success">Spiderman and the X-Men</div>
      </div>
    );
  }
});

module.exports = SeriesList;