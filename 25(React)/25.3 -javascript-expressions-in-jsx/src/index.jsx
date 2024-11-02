import React from "react";
import ReactDOM from "react-dom";

const fName = "Angela";
const lName = "Yu";
const num = 7;

ReactDOM.render(
  <div>
    <h1>Hello {fName + " " + lName}!</h1>
    <p>Your lucky number is {num + 4}</p>
  </div>,
  document.getElementById("root")
);

//ES 6 example
// ReactDOM.render(
//   <div>
//     <h1>Hello {`${fName} ${lName}`}!</h1>
//   </div>,
//   document.getElementById("root")
// );
