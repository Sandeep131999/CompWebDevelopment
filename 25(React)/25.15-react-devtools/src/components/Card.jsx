import React from "react";
import Avatar from "./Avatar";
import Detail from "./Detail";



function Card(prop) {
  return (
      <div className="card">
        <div className="top">
        <h2 className="name">{prop.name}</h2>
          <Avatar
            img={prop.img}
          />
        </div>
        <div className="bottom">
          <Detail DetailInfo={prop.tel}/>
          <Detail DetailInfo={prop.email}/>
        </div>
      </div>
  );
}

export default Card;
