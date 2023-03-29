import React, { useEffect, useState } from "react";

export default function Login(props) {
  let { myFun } = props;

  let [inputValue, setInputValue] = useState("");
  const getInputValue = (e) => {
    setInputValue(e.target.value);
  };

  useEffect(() => {
    myFun(inputValue);
  }, [inputValue]);
  return (
    <div className="bg-light p-5 text-center lead">
      <div className="container">
        <h2>Login </h2>
        <input
          type="text"
          className="form-control mt-4"
          placeholder="Enter TrackName"
          onChange={getInputValue}
        />
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Atque at
        nostrum tempore sunt fugit tempora, possimus laborum nihil iure dolor
        reprehenderit iusto provident rerum labore sed enim soluta? Quam, amet.
        <p className="fw-bold text-danger">{inputValue}</p>
      </div>
    </div>
  );
}
