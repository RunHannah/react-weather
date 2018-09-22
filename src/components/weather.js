import React, { Component } from "react";

class Weather extends Component {
  render() {
    return (
      <div className="weather">
        {this.props.city &&
          this.props.country && (
            <p>
              Location:{" "}
              <span>
                {this.props.city}, {this.props.country}
              </span>
            </p>
          )}
        {this.props.temperature && (
          <p>
            Temperature: <span>{this.props.temperature} &deg;F</span>
          </p>
        )}
        {this.props.description && (
          <p>
            Conditions: <span>{this.props.description}</span>
          </p>
        )}
        {this.props.sunrise && (
          <p>
            Sunrise: <span>{this.props.sunrise}</span>
          </p>
        )}
        {this.props.sunset && (
          <p>
            Sunset: <span>{this.props.sunset}</span>
          </p>
        )}
        {this.props.humidity && (
          <p>
            Humidity: <span>{this.props.humidity} %</span>
          </p>
        )}
        {this.props.error && <p>{this.props.error}</p>}
      </div>
    );
  }
}

export default Weather;
