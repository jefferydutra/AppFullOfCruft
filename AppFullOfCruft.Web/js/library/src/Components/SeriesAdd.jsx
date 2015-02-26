var React = require("React");
var SeriesActionCreators = require('../action/SeriesActionCreators');
var Modal = require('react-bootstrap').Modal;
var Button = require('react-bootstrap').Button;
var ENTER_KEY_CODE = 13;

var SeriesAdd = React.createClass({
  getInitialState: function() {
    return {text: ''};
  },
  render: function() {
    return (
      <Modal title="Modal title"
        backdrop={false}
        animation={false}>
        <div className="modal-body">
          <input type="text" value={this.state.text} onChange={this._onChange}
            onKeyDown={this._onKeyDown} />
        </div>
        <div className="modal-footer">
          <Button onClick={this.props.onRequestHide}>Close</Button>
          <Button bsStyle="primary">Save changes</Button>
        </div>
      </Modal>
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