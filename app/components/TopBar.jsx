var React = require('react');
var {Link, IndexLink} = require('react-router');

var TopBar = React.createClass({
    render: function() {
        return(
            <div>
                <div className="top-bar">
                    <div className="top-bar-left">
                        <ul className="dropdown menu" data-dropdown-menu>
                            <li className="menu-text">ZaZa Pop</li>
                            <li><IndexLink to="/" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Home</IndexLink></li>
                            <li><Link to="/menu" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Menu</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
});

module.exports = TopBar;