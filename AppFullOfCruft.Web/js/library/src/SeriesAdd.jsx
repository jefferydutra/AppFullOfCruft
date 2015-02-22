var React = require("React");
var SeriesActionCreators = require("./actions/SeriesActionCreators.js");

var ENTER_KEY_CODE = 13;

var SeriesAdd = React.createClass({
  getInitialState: function() {
    return {text: ''};
  },
  render: function() {
    return (
    <input type="text" value={this.state.text} onChange={this._onChange}
      onKeyDown={this._onKeyDown} />

    );
  },
  _onChange: function(event, value) {
    this.setState({text: event.target.value});
  },
  _onKeyDown: function(event) {
    if (event.keyCode === ENTER_KEY_CODE) {
      event.preventDefault();
      var text = this.state.text.trim();
      if (text) {
        SeriesActionCreators.create(text);
      }
      this.setState({text: ''});
    }
  }
});

module.exports = SeriesAdd;