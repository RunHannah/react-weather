import React, { Component } from "react";

class Form extends Component {
  render() {
    return (
      <div className="form">
        <form onSubmit={this.props.getWeather}>
          <input type="text" name="city" placeholder="Your City Name" />
          <input type="text" name="country" placeholder="Country" />
          <button>Search</button>
        </form>
      </div>
    );
  }
}

export default Form;
