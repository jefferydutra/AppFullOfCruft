var React = require('React');
var SeriesStore = require('./stores/SeriesStore.js');
var SeriesListItem = require("./SeriesListItem.jsx");


function getStateFromStores() {
  return {
    series: SeriesStore.getAll()
  };
}

function getSeriesListItem(series) {
  return (
    <SeriesListItem
      key={series.id}
      series={series}
    />
  );
}
var SeriesList = React.createClass({
  getInitialState: function () {
    return getStateFromStores();
  },

  componentDidMount: function(){
    SeriesStore.addChangeListener(this._onChange);
  },
  componentWillUnmount: function() {
    SeriesStore.removeChangeListener(this._onChange);
  },
  render: function(){
    console.info("Series",this.state.series);

    var seriesListItems = this.state.series.map(getSeriesListItem);
    return (
      <div>
        <div className="row">
        <div className="col-md-12">
          <div className="btn btn-block btn-info">
            Add Series
          </div>
        </div>
      </div>
      {seriesListItems}
      </div>
    );
  },
  _onChange: function() {
    this.setState(getStateFromStores());
  }
});

module.exports = SeriesList;