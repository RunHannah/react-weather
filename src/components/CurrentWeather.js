import React, { Component } from 'react';

class CurrentWeather extends Component {
  render() {
    const {
      city,
      country,
      temperature,
      description,
      sunrise,
      sunset,
      humidity,
      error
    } = this.props;

    return (
      <div className="weather">
        {city && country && (
          <p>
            <p className="title">Current weather in your city</p>
            Location:{' '}
            <span>
              {city}, {country}
            </span>
          </p>
        )}
        {temperature && (
          <p>
            Temperature: <span>{temperature} &deg;F</span>
          </p>
        )}
        {description && (
          <p>
            Conditions: <span>{description}</span>
          </p>
        )}
        {sunrise && (
          <p>
            Sunrise: <span>{sunrise}</span>
          </p>
        )}
        {sunset && (
          <p>
            Sunset: <span>{sunset}</span>
          </p>
        )}
        {humidity && (
          <p>
            Humidity: <span>{humidity} %</span>
          </p>
        )}
        {error && <p>{error}</p>}
      </div>
    );
  }
}

export default CurrentWeather;
