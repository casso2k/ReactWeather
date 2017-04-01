var React = require('react');

var WeatherMessage = (props) => {
  return (
    <div>
      <h2>It's {props.temp} degrees Celsius in {props.location}!</h2>
    </div>
  );
};

module.exports = WeatherMessage;
