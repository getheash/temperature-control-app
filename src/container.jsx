import React, { Component } from "react";

class Container extends Component {
  state = {
    temp: 10,
  };

  constructor(props) {
    super(props);
    this.handleTempIncrease = this.handleTempIncrease.bind(this);
    this.handleTempDecrease = this.handleTempDecrease.bind(this);
  }

  handleTempIncrease() {
    let newTemp = this.state.temp;
    if (newTemp < 30) {
      newTemp += 1;
    }
    this.setState({
      temp: newTemp,
    });
  }

  handleTempDecrease() {
    let newTemp = this.state.temp;
    if (newTemp > -5) {
      newTemp -= 1;
    }
    this.setState({
      temp: newTemp,
    });
  }
  render() {
    return (
      <div className="app-container">
        <div className="temperature-display-container">
          <div className={this.getTempColor()}>{this.state.temp}°C</div>
        </div>
        <div className="button-container">
          <button onClick={this.handleTempIncrease}>+</button>
          <button onClick={this.handleTempDecrease}>-</button>
        </div>
      </div>
    );
  }

  getTempColor() {
    return this.state.temp >= 15
      ? "temperature-display hot"
      : "temperature-display cold";
  }
}

export default Container;
