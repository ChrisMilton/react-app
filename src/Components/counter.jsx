import React, { Component } from "react";

class Counter extends Component {
  // state = {
  //   value: this.props.counter.value,
  //   id: this.props.counter.id,
  //   imageUrl: "https://picsum.photos/200",
  //   tags: ["tag1", "tag2", "tag3"],
  // };

  componentDidUpdate(prevProps, prevState) {
    console.log("prevProps", prevProps);
    console.log("prevState", prevState);
    // Example
    if (prevProps.counter.value !== this.props.counter.value) {
      // Ajax call to get new data from server
    }
  }

  styles = {
    fontSize: 10,
    fontWeight: "bold",
  };

  // handleIncrement = (product) => {
  //   console.log("Product", product);
  //   this.setState({ value: this.state.value + 1 });
  // };

  render() {
    console.log("Rendered counter. props: ", this.props);

    return (
      <div className="card">
        {/* <img className="card-img-top" src={this.state.imageUrl} /> */}
        <div className="card-body">
          <div className="card-title">
            <h5>Counter #{this.props.counter.id}</h5>
          </div>
          <div className="card-text">
            <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
            <button
              className="btn btn-secondary btn-small"
              onClick={() => this.props.onIncrement(this.props.counter)}
            >
              Increment
            </button>
            <button
              onClick={() => this.props.onDelete(this.props.counter.id)}
              className="btn btn-danger btn-small m-2"
            >
              Delete
            </button>
          </div>
          <br />

          {/* {this.renderTags()} */}
        </div>
      </div>
    );
  }

  renderTags() {
    if (this.state.tags.length === 0) {
      return <p>There are no tags!</p>;
    }
    return (
      <ul>
        {this.state.tags.map((tag) => (
          <li key={tag}>{tag}</li>
        ))}
      </ul>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    //classes += this.state.value === 0 ? "warning" : "primary";
    if (this.props.counter.value === 0) {
      classes += "warning";
    } else if (this.props.counter.value <= 5) {
      classes += "primary";
    } else if (this.props.counter.value <= 10) {
      classes += "danger";
    } else {
      classes += "success";
    }
    return classes;
  }

  formatCount() {
    const { value: count } = this.props.counter;
    return count === 0 ? "Zero" : count;
  }
}

export default Counter;
