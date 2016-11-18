var ReactDom = require('react-dom');
var React = require('react');
import Home from './src/components/Home/Home';
import About from './src/components/About/About';
import NavBar from './src/components/NavBar/NavBar';
import Characters from './src/components/Characters/Characters';

var Router =  React.createClass({
    render: function(){
        var Child;
        switch(this.props.route) {
            case 'about':
                Child = About;
                break;
            case 'characters':
                Child = Characters;
                break;
            default:
                Child = Home;
        }
        return(
            <div>
                <NavBar/>
                <Child />
            </div>
        );
    }
});

function render() {
    const route = window.location.pathname.substr(1);
    ReactDom.render(<Router route={route}/>, document.getElementById('app'));
}

window.addEventListener('hashchange', render);
render();

// ReactDom.render(<Home />, document.getElementById('app'));
