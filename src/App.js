import React, { Component } from "react";
import "./App.css";

import Nav from "./components/nav";
import Main from "./components/main";
import Title from "./components/title";
import Form from "./components/form";
import Weather from "./components/weather";

class App extends Component {
  state = {
    temperature: undefined,
    city: undefined,
    country: undefined,
    humidity: undefined,
    description: undefined,
    error: undefined
  };

  getWeather = async e => {
    e.preventDefault();

    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;

    e.target.reset();

    const api_call = await fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=` +
        process.env.REACT_APP_WEATHER_API_KEY +
        `&units=imperial`
    );
    const data = await api_call.json();

    if (city && country) {
      this.setState({
        temperature: data.main.temp,
        city: data.name,
        country: data.sys.country,
        humidity: data.main.humidity,
        description: data.weather[0].description,
        error: ""
      });
    } else {
      this.setState({
        temperature: undefined,
        city: undefined,
        country: undefined,
        humidity: undefined,
        description: undefined,
        error: "Please enter a valid value"
      });
    }
    console.log("data", data);
  };

  render() {
    return (
      <div className="wrapper">
        <Nav />
        <Main />
        <Form getWeather={this.getWeather} />
        <Title />
        <Weather
          temperature={this.state.temperature}
          city={this.state.city}
          country={this.state.country}
          humidity={this.state.humidity}
          description={this.state.description}
          error={this.state.error}
        />
      </div>
    );
  }
}

export default App;
