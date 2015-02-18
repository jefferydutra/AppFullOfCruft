var React = require("React");

var NavigationTabs = React.createClass({
  getInitialState: function() {
    // naming it initialX clearly indicates that the only purpose
    // of the passed down prop is to initialize something internally
    return {navType: this.props.intialNavType};
  },
  componentDidMount: function() {
    this.setState({navType: "Series"});
  },
  handleSeriesClick: function() {
    this.setState({navType: "Series"});
  },
  handleStoriesClick: function() {
    this.setState({navType: "Stories"});
  },
  handleEventsClick: function() {
    this.setState({navType: "Events"});
  },
  render: function(){
    var currentNav;

    if (this.state.navType === "Series") {
      currentNav = "series";
    } else {
      currentNav = "other";
    }

    return (
      <div>
        <ul className="nav nav-tabs">
          <li role="presentation">
            <a href="#" onClick={this.handleSeriesClick}>Series</a>
          </li>
          <li role="presentation">
            <a href="#" onClick={this.handleStoriesClick}>Stories</a>
          </li>
          <li role="presentation">
            <a href="#" onClick={this.handleEventsClick}>Events</a>
          </li>
        </ul>
        <div className="row">
          <div className="col-md-12">
          {currentNav}
          </div>
        </div>
      </div>

    );
  }
});

module.exports = NavigationTabs;