import React from "react";

// Props come in as an object
const Greeting = (props) => {
  return <h2>Hello, {props.name}!</h2>;
};

export default Greeting;
