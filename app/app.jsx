var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');
var Main = require('Main');
var Home = require('Home');
var About = require('About');
var Menu = require('Menu');

require('style!css!foundation-sites/dist/foundation.min.css');
$(document).foundation();

require('style!css!ApplicationStyles');

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={Main}>
      <Route path="/menu" className="link" component={Menu}/>
      <IndexRoute component={Home}/>
    </Route>
  </Router>,
  document.getElementById('app')
);
