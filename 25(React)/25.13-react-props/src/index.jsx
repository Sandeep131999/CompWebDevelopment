import React from "react";
import ReactDOM from "react-dom";

function Card(props)
{
  console.log(props);
  return(
    <div>
        <h2>{props.name}</h2>
        <img src={props.img} alt="avatar_img"/>
        <p>{props.tel}</p>
        <p>{props.email}</p>
    </div>
  );
}

const cardData = [
  {
    name: "Beyonce",
    img: "https://blackhistorywall.files.wordpress.com/2010/02/picture-device-independent-bitmap-119.jpg",
    tel: "+123 456 789",
    email: "b@beyonce.com"
  },
  {
    name: "Jack Bauer",
    img: "https://pbs.twimg.com/profile_images/625247595825246208/X3XLea04_400x400.jpg",
    tel: "+987 654 321",
    email: "jack@nowhere.com"
  },
  {
    name: "Chuck Norris",
    img: "https://i.pinimg.com/originals/e3/94/47/e39447de921955826b1e498ccf9a39af.png",
    tel: "+918 372 574",
    email: "gmail@chucknorris.com"
  }
];


ReactDOM.render(
  <div>
    <h1>Contacts</h1>
    {cardData.map(data => (
      <Card 
        name={data.name}
        img={data.img}
        tel={data.tel}
        email={data.email}
        key={data.name} // Adding a unique key prop for each card
      />
    ))}
  </div>,
  document.getElementById("root")
);

// If you're running this locally in VS Code use the commands:
// npm install
// to install the node modules and
// npm run dev
// to launch your react project in your browser
