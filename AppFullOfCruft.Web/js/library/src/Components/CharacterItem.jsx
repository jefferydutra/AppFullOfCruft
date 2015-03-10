var React = require("React");


var CharacterItem = React.createClass({
  render: function(){
    return (
      <tr>
        <td>{this.props.character.id}</td>
        <td>{this.props.character.title}</td>
      </tr>
    );
  }
});

module.exports = CharacterItem;