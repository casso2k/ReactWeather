var React = require('react');

var About = (props) => {
  return (
    <div>
      <h1 className="text-center">About</h1>
      <p className="text-center push-down4">
        This is a weather application built on React by Picasso.
      </p>
      <p className="push-down4">
        Here are some of the tools used:
      </p>
      <ul>
        <li>
          <a href="https://facebook.github.io/react">React</a> - This was the JavaScript framework used.
        </li>
        <li>
          <a href="http://openweathermap.org">Open Weather Map</a> - I used Open Weather Map to search for
            weather data by city name.
        </li>
      </ul>
    </div>
  );
};

module.exports = About;
