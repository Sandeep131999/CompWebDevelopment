import React from "react";

function Form(prop) {
  return (
    <form className="form">
      <input type="text" placeholder="Username" />
      <input type="password" placeholder="Password" />
      {!prop.IsRegisterd &&
        <input type="password" placeholder="ConfirmPassword" />
      }
      {prop.IsRegisterd ? <button type="submit">Login</button> : <button type="submit">Register</button>}
    </form>
  );
}

export default Form;
