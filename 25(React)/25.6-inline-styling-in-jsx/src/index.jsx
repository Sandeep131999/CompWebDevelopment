import React from "react";
import ReactDOM from "react-dom";



// If you're running this locally in VS Code use the commands:
// npm install
// to install the node modules and
// npm run dev
// to launch your react project in your browser

const customStyle  = {
    border  : "1px solid black",
    color:"blue",
}

ReactDOM.render(<h1 style={customStyle}>Hello World!</h1>, document.getElementById("root"));