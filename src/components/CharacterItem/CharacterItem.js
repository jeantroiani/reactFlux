'use strict';

var React = require('react');

var CharacterItem =  React.createClass({
	propTypes: {
		characters: React.PropTypes.array.isRequired
	},

  render: function() {
    return (
			<section>
				<table>
					<thead>
					<tr>
						<th>Name:</th>
					</tr>
					</thead>
					<tbody>
					{this.props.characters.map(function(character, id){
  					return(
							<tr key={id}>
								<td>{character}</td>
							</tr>
						);
					},this )}
					</tbody>
				</table>
			</section>
    );
  }
});

export default CharacterItem;
