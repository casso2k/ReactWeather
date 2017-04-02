var React = require('react');
var {Link} = require('react-router-dom');
var ErrorModal = require('./ErrorModal.jsx');

var Nav = React.createClass({
  getInitialState: function(){
    return {
      dataToggle: 'modal',
      dataTarget: '#error-modal'
    };
  },
  getWeather: function(e){
    e.preventDefault();
    var location = this.refs.location.value;
    var encodedLocation = encodeURIComponent(location);
    if (location.length > 0){
      this.refs.location.value = '';
      window.location.hash = '#/weather?location=' + encodedLocation;
    }
  },
  onChange: function(){
    var location = this.refs.location.value;
    var cityData = [];
    $.ajax({
      type: 'GET',
      url: 'http://api.openweathermap.org/data/2.5/find?q=' + location + '&appid=b11232de231d13c63b910315244dabb8&units=metric',
      dataType: 'json',
      success: function(data){
        cityData = data.list.map(function(city){
          if (city.name === location && city.sys.country === 'CA'){
            return city;
          }
        });
        if (cityData[0] && cityData[0].name.length > 0){
          this.setState({
            dataToggle: null,
            dataTarget: null
          });
        } else {
          this.setState({
            dataToggle: 'modal',
            dataTarget: '#error-modal'
          });
        }
      }.bind(this)
    });
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
          <div style={{float: 'right', marginTop: '0.5em'}}><input type="text" ref='location' onKeyUp={this.onChange} placeholder="Search weather by city" />&nbsp;&nbsp;<button type="button" className="btn btn-warning" onClick={this.getWeather} data-toggle={this.state.dataToggle} data-target={this.state.dataTarget}>Get Weather</button></div>
          <ErrorModal />
      </div>
      </nav>
    );
  }
});

module.exports = Nav;
