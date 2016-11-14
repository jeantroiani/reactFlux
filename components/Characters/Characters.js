'use strict';

var React = require('react');

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
                    <table>
                        <thead>
                            <tr>
                                <th>Name:</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.characters.map(function(character, id){
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

export default Characters;
