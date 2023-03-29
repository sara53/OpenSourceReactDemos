import React, { Component } from "react";
export default class Content extends Component {
  // react Hooks
  constructor() {
    super();
    console.log("1- ctor");
  }
  componentDidMount() {
    // connect api

    console.log("3- mount");
  }
  componentDidUpdate() {
    console.log("count after update :", this.state.count);
  }
  state = {
    count: 0,
    title: "Counter Component",
  };
  increase = () => {
    this.setState({
      count: this.state.count + 1,
    });
    console.log(this.state.count);
  };
  decrease = () => {
    this.setState({
      count: this.state.count - 1,
    });
    console.log(this.state.count);
  };
  changeTitle = () => {
    this.setState({
      title: "Welcome Open Source Track",
    });
  };

  render() {
    console.log("2-Render Method");
    return (
      <div className="bg-light  p-5 text-center lead">
        <div className="container">
          <h1>{this.state.title}</h1>
          <p>
            Count is : <strong> {this.state.count}</strong>
          </p>
          <button className="btn btn-success" onClick={this.increase}>
            +
          </button>
          <button className="btn btn-danger mx-2" onClick={this.decrease}>
            -
          </button>
          <button className="btn btn-warning" onClick={this.changeTitle}>
            Change Title
          </button>
        </div>
      </div>
    );
  }
}
