import React, { Component } from "react";
import "./App.css";

class App extends Component {
  state = {
    rooms: 0,
    adults: 0,
    children: 0,
    totalCapacity: 0 // total capacity remaining..
  };

  increamentRoom = () => {
    let totalCapacity =
      (this.state.rooms + 1) * 4 -
      (this.state.adults + 1) -
      this.state.children;
    // substracting adults and children ...
    this.setState({
      rooms: this.state.rooms + 1,
      adults: this.state.adults + 1,
      totalCapacity
    });
  };
  increamentAdults = () => {
    if (this.state.rooms * 4 - this.state.children - this.state.adults > 0) {
      this.setState({
        adults: this.state.adults + 1,
        totalCapacity: this.state.totalCapacity - 1
      });
    }
  };
  increamentChildren = () => {
    if (this.state.rooms * 4 - this.state.children - this.state.adults > 0) {
      this.setState({
        children: this.state.children + 1,
        totalCapacity: this.state.totalCapacity - 1
      });
    }
  };
  decrementRoom = () => {
    let canbeAccomadated = (this.state.rooms - 1) * 4;
    let available = this.state.adults + this.state.children;
    let childcount = this.state.children;
    while (canbeAccomadated < available) {
      if (childcount > 0) {
        childcount--;
      }
      available--;
    }
    this.setState({
      rooms: this.state.rooms - 1,
      children: childcount,
      adults: available - childcount,
      totalCapacity: canbeAccomadated
    });
  };

  decrementAdults = () => {
    if (this.state.adults !== 1)
      this.setState({
        adults: this.state.adults - 1,
        totalCapacity: this.state.totalCapacity + 1
      });
  };
  decrementChildren = () => {
    this.setState({
      children: this.state.children - 1,
      totalCapacity: this.state.totalCapacity + 1
    });
  };
  render() {
    return (
      <div className="App">
        <p>
          Sorry I am going out of bangalore so, due to scarcity of time I cann't
          design UI Logically code submitted is working fine...
        </p>
        <h1>ROOMS</h1>
        <button onClick={this.decrementRoom} disabled={this.state.rooms === 0}>
          -
        </button>
        {this.state.rooms}
        <button onClick={this.increamentRoom} disabled={this.state.rooms === 5}>
          +
        </button>
        <br />
        <h1>Adults</h1>
        <button
          onClick={this.decrementAdults}
          disabled={this.state.adults <= 1}
        >
          -
        </button>
        {this.state.adults}
        <button
          onClick={this.increamentAdults}
          disabled={
            this.state.totalCapacity === 0 ||
            this.state.rooms === 0 ||
            this.state.rooms * 4 - this.state.adults - this.state.children === 0
          }
        >
          +
        </button>
        <br />
        <h1>Children</h1>
        <button
          onClick={this.decrementChildren}
          disabled={this.state.children === 0}
        >
          -
        </button>
        {this.state.children}
        <button
          onClick={this.increamentChildren}
          disabled={
            this.state.totalCapacity === 0 ||
            this.state.rooms === 0 ||
            this.state.rooms * 4 - this.state.adults - this.state.children === 0
          }
        >
          +
        </button>
      </div>
    );
  }
}
export default App;
