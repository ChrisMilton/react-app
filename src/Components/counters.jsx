import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  render() {
    const { counters, onDelete, onIncrement, onReset } = this.props;

    return (
      <div className="text-center">
        {counters.map((counter) => (
          <Counter
            key={counter.id}
            onDelete={onDelete}
            onIncrement={onIncrement}
            // value={counter.value}
            // id={counter.id}
            counter={counter}
          />
        ))}
        <button onClick={onReset} className="btn btn-primary m-4">
          Reset
        </button>
      </div>
    );
  }
}

export default Counters;
