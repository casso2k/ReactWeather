var React = require('react');

var WeatherMessage = (props) => {
  return (
    <div>
      <h2 className='text-center'>It's {props.temp} degrees Celsius in {props.location}!</h2>
    </div>
  );
};

module.exports = WeatherMessage;
