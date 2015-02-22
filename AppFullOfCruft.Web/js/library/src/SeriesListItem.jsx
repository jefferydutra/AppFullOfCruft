var React = require("React");
var ReactPropTypes = React.PropTypes;


var SeriesListItem = React.createClass({
  propTypes: {
    series: ReactPropTypes.object
  },
  render: function(){

    var series = this.props.series;
    return (
      <div className="alert alert-success">
        <a href="#">{series.title}</a>
      </div>
    );
  }
});

module.exports = SeriesListItem;