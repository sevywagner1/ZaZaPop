var React = require('react');
var TopBar = require('TopBar');

var Home = React.createClass({
    render: function() {
        return(
            <div>
                <h1 className="text-center home-title">Welcome to ZaZa Pop!</h1>
                <h2 className="text-center home-message">The Exotic Soda Food Truck</h2>
            </div>
        );
    }
});

module.exports = Home;