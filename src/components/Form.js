import React, { Component } from "react";

class Form extends Component {
  render() {
    return (
      <div className="form">
        <form onSubmit={this.props.getWeather}>
          <input
            className="input-city"
            type="text"
            name="city"
            placeholder="Your City Name"
          />
          <input
            className="input-country"
            type="text"
            name="country"
            placeholder="Country"
          />
          <button className="button">Search</button>
        </form>
      </div>
    );
  }
}

export default Form;
