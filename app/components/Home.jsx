var React = require('react');
var TopBar = require('TopBar');

var Home = React.createClass({
    render: function() {
        return(
            <div>
                <h1 className="text-center page-title">Welcome to ZaZa Pop!</h1>
            </div>
        );
    }
});

module.exports = Home;