var React = require("React");
var CharacterStore = require("../stores/characterStore");
var CharacterItem = require("./CharacterItem.jsx");

function getStateFromStores() {
  return {
    characters: CharacterStore.getAll()
  };
}

function getCharacterRows(character) {
  return (
    <CharacterItem
      key={character.id}
      character={character}
    />
  );
}

var CharacterManager = React.createClass({
  getInitialState: function () {
    return getStateFromStores();
  },
  componentDidMount: function(){
    CharacterStore.addChangeListener(this._onChange);
  },
  componentWillUnmount: function() {
    CharacterStore.removeChangeListener(this._onChange);
  },
  render: function() {
    var characterRows = this.state.characters.map(getCharacterRows);
    return (
      <div className="row">
        <table class="table table-striped">
          <tr>
            <td>Id</td>
            <td>Title</td>
          </tr>
          {characterRows}
        </table>
      </div>
    );
  },
  _onChange: function() {
    this.setState(getStateFromStores());
  }
});

module.exports = CharacterManager;

