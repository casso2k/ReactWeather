var React = require('react');
var {Link} = require('react-router-dom');

var Nav = (props) => {
  return (
    <div>
      <Link to="/weather">Get Weather</Link>
      <Link to="/about">About</Link>
      <Link to="/examples">Examples</Link>
    </div>
  );
};

module.exports = Nav;
