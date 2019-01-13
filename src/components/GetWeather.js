import React, { Component } from 'react';
import Form from './Form';
import CurrentWeather from './CurrentWeather';

export class GetWeather extends Component {
  state = {
    temperature: '',
    city: '',
    country: '',
    humidity: '',
    description: '',
    sunrise: '',
    sunset: '',
    error: ''
  };

  getWeather = async e => {
    e.preventDefault();

    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;

    e.target.reset();

    const api_call = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=` +
        process.env.REACT_APP_WEATHER_API_KEY +
        `&units=imperial`
    );
    const data = await api_call.json();

    if (city && country) {
      let timeSunrise = new Date(data.sys.sunrise * 1000).toLocaleTimeString();
      let timeSunset = new Date(data.sys.sunset * 1000).toLocaleTimeString();

      this.setState({
        temperature: Math.round(data.main.temp),
        city: data.name,
        country: data.sys.country,
        humidity: data.main.humidity,
        description: data.weather[0].description,
        sunrise: timeSunrise,
        sunset: timeSunset,
        error: ''
      });
    } else {
      this.setState({
        temperature: '',
        city: '',
        country: '',
        humidity: '',
        description: '',
        sunrise: '',
        sunset: '',
        error: 'Please enter a valid value'
      });
    }
  };
  render() {
    return (
      <div>
        <Form getWeather={this.getWeather} />
        <CurrentWeather
          temperature={this.state.temperature}
          city={this.state.city}
          country={this.state.country}
          humidity={this.state.humidity}
          description={this.state.description}
          sunrise={this.state.sunrise}
          sunset={this.state.sunset}
          error={this.state.error}
        />
      </div>
    );
  }
}

export default GetWeather;
