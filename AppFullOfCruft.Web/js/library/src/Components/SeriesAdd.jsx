var React = require("React");
var SeriesStore = require('../stores/seriesStore');
var SeriesActionCreators = require('../action/SeriesActionCreators');
var Modal = require('react-bootstrap').Modal;
var Button = require('react-bootstrap').Button;
var Navigation = require('react-router').Navigation;

function getValidationErrors (){
  return SeriesStore.getAllValidationErrors();
}
var SeriesAdd = React.createClass({
  mixins: [Navigation],

  getInitialState: function() {
    return {
      text: '',
      errors: []
    };
  },
  componentDidMount: function(){
    SeriesStore.addChangeListener(this._onChange);

  },
  componentWillUnmount: function() {
    SeriesStore.removeChangeListener(this._onChange);
  },
  render: function() {
    return (
      <Modal  {...this.props}
        title="Modal title"
        backdrop={false}
        animation={false}>
        <div className="modal-body">
          <input type="text" value={this.state.text} onChange={this._onTextChange} />
      </div>
        <div className="modal-footer">
          <Button onClick={this.props.onRequestHide}>Close</Button>
          <Button onClick={this._save} bsStyle="primary">Save changes</Button>
        </div>
      </Modal>
    );
  },
  _onTextChange: function(event, value) {
    this.setState({text: event.target.value});
  },
  _onChange: function() {
    var errorMessages = getValidationErrors();
    if(!errorMessages || errorMessages.length === 0){
      this.setState({text: ''});
      this.transitionTo('/series');
    }
    alert(errorMessages);
  },
  _save: function(event) {
      event.preventDefault();
      var text = this.state.text.trim();
      if (text) {
        SeriesActionCreators.create(text);
      }
  }
});

module.exports = SeriesAdd;