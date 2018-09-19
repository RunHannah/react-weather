import React, { Component } from "react";
import "./App.css";

import Title from "./components/title";
import Form from "./components/form";
import Weather from "./components/weather";

class App extends Component {
  render() {
    return (
      <div>
        <Title />
        <Form />
        <Weather />
      </div>
    );
  }
}

export default App;
