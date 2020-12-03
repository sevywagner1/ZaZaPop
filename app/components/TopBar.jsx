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
                            <li className="top-link"><IndexLink to="/" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Home</IndexLink></li>
                            <li className="top-link"><Link to="/menu" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Menu</Link></li>
                            <li className="top-link"><Link to="/about" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>About</Link></li>
                            <li className="top-link"><Link to="/contact" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Contact Us</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
});

module.exports = TopBar;