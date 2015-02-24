var React = require("React");
var ReactPropTypes = React.PropTypes;
var Router = require('react-router');

var Link = Router.Link;

var PanelBody = React.createClass({
  propTypes: {
    series: ReactPropTypes.object
  },
  render: function() {

    return (
      <div className="panel-body">
        {this.props.series.title}
      </div>
    );
  }
});
var SeriesListItem = React.createClass({
  propTypes: {
    series: ReactPropTypes.object
  },
  render: function(){

    var series = this.props.series;
    var selectedId = this.props.selectedSeriesId
                      ? parseInt(this.props.selectedSeriesId)
                      : 0;
    var isSelectedSeries = (selectedId && selectedId === series.id);
    var panelClass = isSelectedSeries
                  ? "panel panel-primary"
                  : "panel panel-default" ;
    var panelBody = isSelectedSeries
      ? <PanelBody
          key={series.id}
          series={series} />
      : "";

    return (

      <div className={panelClass}  key={series.id}>
        <Link to="series" params={series}>{series.title}</Link>

        {panelBody}
      </div>
    );
  }
});

module.exports = SeriesListItem;