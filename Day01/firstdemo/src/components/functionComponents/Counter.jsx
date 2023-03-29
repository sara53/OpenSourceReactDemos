import React, { useEffect, useState } from "react";

export function Counter() {
  /**
   * componentDidMount, componentDidUpdate
   * no second Params --> componentDidMount, componentDidUpdate on all states
   * [] --> componentDidMount
   * [stateName] --> componentDidMount, componentDidUpdate [stateName]
   */

  let [count, setCount] = useState(0);
  let [title, setTitle] = useState("counter Component");
  let [show, setShow] = useState(false);

  useEffect(() => {
    /** clean up function */
    return () => {
      console.log("Hello From Clean up function");
    };
  }, [count]);

  let increase = () => {
    setCount(count + 1);
  };
  let decrease = () => {
    setCount(count - 1);
  };
  let changeTitle = () => {
    setTitle("Open Source");
  };
  let toggle = () => {
    setShow(!show);
  };
  return (
    <div className="bg-light  p-5 text-center lead">
      {console.log("1- Render")}
      <h1>{title}</h1>
      <p className="fs-3">
        count :<strong className="text-danger"> {count}</strong>
      </p>
      <button className="btn btn-success" onClick={increase}>
        +
      </button>
      <button className="btn btn-danger mx-1" onClick={decrease}>
        -
      </button>
      <button className="btn btn-warning mx-1" onClick={changeTitle}>
        change Title
      </button>
      {show && (
        <p className="bg-secondary m-3">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Impedit iure
          ducimus nisi autem voluptatibus modi aliquam, incidunt laudantium
          praesentium cumque nesciunt a accusantium quis animi iste tempora
          soluta ut consequatur.
        </p>
      )}
      <button className="btn btn-dark mx-1" onClick={toggle}>
        Toggle
      </button>
    </div>
  );
}
