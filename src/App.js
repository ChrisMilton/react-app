import React, { Component } from "react";
import logo from "./logo.svg";
import NavBar from "./Components/navbar";
import Counters from "./Components/counters";
import "./App.css";

class App extends Component {
  state = {
    counters: [
      { id: 1, value: 0 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 },
    ],
  };

  handleIncrement = (counter) => {
    console.log(counter);
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value++;
    this.setState({ counters });
  };

  handleDelete = (counterId) => {
    console.log("Pressed delete button", counterId);
    const counters = this.state.counters.filter((c) => c.id !== counterId);
    this.setState({ counters });
  };

  handleReset = () => {
    console.log("Pressed reset button");
    const counters = this.state.counters;
    counters.forEach((c) => {
      c.value = 0;
    });
    console.log("Counters", counters);
    this.setState({ counters });
  };

  render() {
    return (
      <React.Fragment>
        <NavBar
          totalCounters={this.state.counters.filter((c) => c.value > 0).length}
        />
        <main className="container">
          <Counters
            counters={this.state.counters}
            onReset={this.handleReset}
            onIncrement={this.handleIncrement}
            onDelete={this.handleDelete}
          />
          <div className="React-app-logo">
            <img src={logo} className="App-logo" alt="logo" />
          </div>
        </main>
      </React.Fragment>
    );
  }
}
export default App;
