'use strict';

var React = require('react');

const Home = React.createClass({
    render: function() {
        return (
            <nav>
                <ol>
                    <li><a href="./">Home</a></li>
                    <li><a href="./about">About</a></li>
                    <li><a href="./characters">Characters</a></li>
                </ol>
            </nav>
        );
    }
});

export default Home;
