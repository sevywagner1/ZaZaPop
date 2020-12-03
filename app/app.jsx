var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');
var Main = require('Main');
var Home = require('Home');
var About = require('About');
var Menu = require('Menu');
var ContactUs = require('ContactUs');

require('style!css!foundation-sites/dist/foundation.min.css');
$(document).foundation();

require('style!css!ApplicationStyles');

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={Main}>
      <Route path="/contact" component={ContactUs}/>
      <Route path="/about" component={About}/>
      <Route path="/menu" component={Menu}/>
      <IndexRoute component={Home}/>
    </Route>
  </Router>,
  document.getElementById('app')
);
