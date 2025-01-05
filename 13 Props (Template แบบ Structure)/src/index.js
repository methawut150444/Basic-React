import React from "react";
import ReactDOM from "react-dom";

function Hobby(props) {
  return (
    <div>
      <h2>{props.hobbyName}</h2>
      <img src={props.hobbyIMG} />
      <p> {props.lovlyPoint} </p>
    </div>
  );
}

ReactDOM.render(
  <div>
    <h1>My workspace</h1>

    <Hobby
      hobbyName="Robotic"
      hobbyIMG="https://www.hobbyconsolas.com/sites/navi.axelspringer.es/public/media/image/2022/06/robots-2720705.jpg"
      lovlyPoint="8/10"
    />

    <Hobby
      hobbyName="Japanses"
      hobbyIMG="https://career-advice.jobs.ac.uk/wp-content/uploads/Japan-e1634207070862.jpg.optimal.jpg"
      lovlyPoint="9/10"
    />

    <Hobby
      hobbyName="Teaching"
      hobbyIMG="../img/Teaching.jpg"
      lovlyPoint="7/10"
    />
  </div>,
  document.getElementById("root")
);
