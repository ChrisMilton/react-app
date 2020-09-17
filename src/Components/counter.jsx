import React, { Component } from "react";

class Counter extends Component {
  state = {
    value: this.props.value,
    id: this.props.id,
    imageUrl: "https://picsum.photos/200",
    tags: ["tag1", "tag2", "tag3"],
  };

  styles = {
    fontSize: 10,
    fontWeight: "bold",
  };

  handleIncrement = (product) => {
    console.log(product);
    this.setState({ value: this.state.value + 1 });
  };

  render() {
    console.log("prop", this.props);

    return (
      <div className="card">
        {/* <img className="card-img-top" src={this.state.imageUrl} /> */}
        <div className="card-body">
          <div className="card-title">
            <h5>Counter #{this.props.id}</h5>
          </div>
          <div className="card-text">
            <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
            <button
              className="btn btn-secondary btn-small"
              onClick={() => this.handleIncrement(1)}
            >
              Increment
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
    if (this.state.value === 0) {
      classes += "warning";
    } else if (this.state.value <= 5) {
      classes += "primary";
    } else if (this.state.value <= 10) {
      classes += "danger";
    } else {
      classes += "success";
    }
    return classes;
  }

  formatCount() {
    const { value: count } = this.state;
    return count === 0 ? "Zero" : count;
  }
}

export default Counter;
