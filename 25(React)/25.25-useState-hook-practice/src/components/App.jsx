import React,{useState} from "react";



function App() {
  setInterval(updateTime,1000)
  let now = new Date().toLocaleTimeString();
  const [time,setTime ] = useState(now);
  function updateTime (){
    setTime(new Date().toLocaleTimeString());
  }
  return (
    <div className="container">
      <h1>{time}</h1>
      <button onClick={updateTime}>Get Time</button>
    </div>
  );
}

export default App;
