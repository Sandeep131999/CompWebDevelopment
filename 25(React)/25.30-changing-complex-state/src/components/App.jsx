import React, { useState } from "react";

function App() {
  const [fullname, setFullname] = useState({
    fName: "",
    lname: ""
  });

  function handleChange(event) {
    const { value, name } = event.target;

    setFullname(prevValue => {
      if (name === "fName") {
        return {
          fName: value,
          lname: prevValue.lname
        };
      } else if (name === "lname") {
        return {
          fName: prevValue.fName,
          lname: value,
        };
      }
    });
  }

  return (
    <div className="container">
      <h1>
        Hello {fullname.fName}{fullname.lname}
      </h1>
      <form>
        <input
          name="fName"
          onChange={handleChange}
          placeholder="First Name"
          value={fullname.fName}
        />
        <input
          name="lName"
          onChange={handleChange}
          placeholder="Last Name"
          value={fullname.lname}
        />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
