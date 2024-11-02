import React from "react";
import ReactDOM from "react-dom";

const image = "https://picsum.photos/200";

ReactDOM.render(
  <div>
    <h1 class="heading">My Favourite Foods</h1>
    {/* <ul>
      <li>Bacon</li>
      <li>Jamon</li>
      <li>Noodles</li>
    </ul> */}
    <img src={image + "?grayscale"}/>

  </div>,
  document.getElementById("root")
);

// If you're running this locally in VS Code use the commands:
// npm install
// to install the node modules and
// npm run dev
// to launch your react project in your browser
