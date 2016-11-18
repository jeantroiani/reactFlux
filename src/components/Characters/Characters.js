'use strict';

var React = require('react');
var CharacterItem = require('../CharacterItem/CharacterItem.js').default;

var Characters =  React.createClass({

	getInitialState: function() {
		return {
			characters: []
		};
	},

	componentDidMount: function() {
		fetch('https://swapi.co/api/people/')
			.then(function(response) {
				return response.json();
			})
			.then(function(data) {
				const charactersName = data.results.map(function(character){
					return character.name;
				});
				this.setState({ characters: charactersName.slice(0,3) });
			}.bind(this));
	},

	render: function() {
		return (
      <section>
          <h1>Characters</h1>
          <CharacterItem characters={this.state.characters} />
      </section>
		);
	}
});

export default Characters;
