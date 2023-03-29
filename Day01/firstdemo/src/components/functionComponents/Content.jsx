import React from "react";

export function Content(props) {
  const { bgColor } = props;
  return (
    <div className="bg-light p-5 text-center">
      <div className={`p-3 rounded ${bgColor}`}>
        <h1>{props.title}</h1>
        <p>{props.intakeNumber}</p>
      </div>
    </div>
  );
}
