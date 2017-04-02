var React = require('react');
var {Link} = require('react-router-dom');

var Nav = React.createClass({
  getWeather: function(){
    alert(this.refs.location.value);
  },
  render: function(){
    return (
      <nav className="navbar navbar-default">
        <div className="container-fluid">
          <div className="navbar-header">
            <a className="navbar-brand"><Link to="/weather" style={{textDecoration: "none"}}>ReactWeather</Link></a>
          </div>
          <ul className="nav navbar-nav">
            <li><Link to="/weather">Get Weather</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/examples">Examples</Link></li>
          </ul>
          <div style={{float: 'right', marginTop: '0.5em'}}><input type="text" ref='location' placeholder="Search weather by city" />&nbsp;&nbsp;<button className="btn btn-warning" onClick={this.getWeather}>Get Weather</button></div>
        </div>
      </nav>
    );
  }
});

module.exports = Nav;
