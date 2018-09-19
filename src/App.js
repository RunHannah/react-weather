import React, { Component } from "react";
import "./App.css";

import Title from "./components/title";
import Form from "./components/form";
import Weather from "./components/weather";

class App extends Component {
  getWeather = async e => {
    e.preventDefault();

    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;

    const api_call = await fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=` +
        process.env.REACT_APP_WEATHER_API_KEY
    );
    const data = await api_call.json();
    console.log("data", data);
  };

  render() {
    return (
      <div>
        <Title />
        <Form getWeather={this.getWeather} />
        <Weather />
      </div>
    );
  }
}

export default App;
