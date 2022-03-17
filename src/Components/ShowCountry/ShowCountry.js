import React from "react";
import "./ShowCountry.css";

const ShowCountry = (props) => {
  console.log(props.country);
  const { name, population, flags } = props.country;

  return (
    <div className="container">
      <div>
        <img src={flags.png} alt="" />
        <h2>{name.common}</h2>
        <p>{population}</p>
      </div>
    </div>
  );
};

export default ShowCountry;
