var React = require('react');
var TopBar = require('TopBar');
var Home = require('Home');

var Main = React.createClass({
  render: function () {
    return (
      <div>
        <TopBar/>
        {this.props.children}
      </div>
    );
  }
});

module.exports = Main;
