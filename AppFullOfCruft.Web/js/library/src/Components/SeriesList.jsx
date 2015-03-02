var React = require('React');
var SeriesStore = require('../stores/seriesStore');
var SeriesListItem = require("./SeriesListItem.jsx");
var ModalTrigger = require('react-bootstrap').ModalTrigger;
var Button = require('react-bootstrap').Button;
var SeriesAdd = require("./SeriesAdd.jsx");

var Router = require('react-router');

function getStateFromStores() {
  return {
    series: SeriesStore.getAll()
  };
}

function getSeriesListItem(series, selectedSeriesId) {
  return (
    <SeriesListItem
      key={series.id}
      series={series}
      selectedSeriesId={selectedSeriesId}
    />
  );
}
var SeriesList = React.createClass({

  mixins: [ Router.Navigation, Router.State ],

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
    var selectedSeriesId = this.props.selectedSeriesId;
    var seriesListItems = this.state.series.map(
      function(series){
        return getSeriesListItem(series, selectedSeriesId);
      });
    return (
      <div>
        <div className="row">
        <div className="col-md-12">
          <ModalTrigger modal={<SeriesAdd />}>
            <Button bsStyle="primary" bsSize="large">Add Series</Button>
          </ModalTrigger>
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