var React = require('react');
var ReactDOM = require('react-dom');
var {HashRouter, Route, Redirect} = require('react-router-dom');
var Main = require('./components/Main.jsx');
var Weather = require('./components/Weather.jsx');
var About = require('./components/About.jsx');
var Examples = require('./components/Examples.jsx');
require("./styles/app.scss");

ReactDOM.render(
  <HashRouter>
    <Main>
      <Redirect from="/" to="/weather" />
      <Route path="/weather" component={Weather} />
      <Route path="/about" component={About} />
      <Route path="/examples" component={Examples} />
    </Main>
  </HashRouter>,
  document.getElementById('app')
);
