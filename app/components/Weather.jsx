var React = require('react');
var WeatherForm = require('./WeatherForm.jsx');
var WeatherMessage = require('./WeatherMessage.jsx');
var ErrorModal = require('./ErrorModal.jsx');

var Weather = React.createClass({
  getInitialState: function(){
    return {
      isLoading: false,
      dataToggle: 'modal',
      dataTarget: '#error-modal'
    };
  },
  handleSearch: function(location){
    this.setState({
      isLoading: true
    });
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
        if (cityData[0]){
          this.setState({
            location: cityData[0].name,
            temp: cityData[0].main.temp,
            isLoading: false
          });
        } else {
          this.setState({
            isLoading: false
          });
        }
      }.bind(this),
      error: function(){
        alert("Failed contacting server");
        this.setState({
          isLoading: false
        });
      }.bind(this)
    });
  },
  handleChange: function(location){
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
    var that = this;
    function renderMessage(){
      if (that.state.isLoading){
        return <h3 className='text-center'>Fetching weather data...</h3>;
      }
      else if (that.state.temp && that.state.location){
        return <WeatherMessage location={that.state.location} temp={that.state.temp} />;
      }
    }
    return (
      <div>
        <h1 className='text-center'>Get Weather</h1>
        <br />
        <br />
        <WeatherForm onSearch={this.handleSearch} onChange={this.handleChange} dataToggle={this.state.dataToggle} dataTarget={this.state.dataTarget} />
        {renderMessage()}
        <ErrorModal />
      </div>
    );
  }
});

module.exports = Weather;
