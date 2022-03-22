import React from "react";
import "./SingleCard.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus } from "@fortawesome/free-solid-svg-icons";
const SingleCard = (props) => {
  const { img, name, price, ratings, seller } = props.item;

  return (
    <div className="cards">
      <img src={img} alt="" />

      <div className="card-details">
        <h1>{name.length > 10 ? name.slice(0, 16) : name}</h1>
        <h4>Price : {price}$</h4>
        <p>Manufacturer : {seller} </p>
        <p>Rating : {ratings} </p>
      </div>
      <button>
        Add to Cart <FontAwesomeIcon icon={faCartPlus}></FontAwesomeIcon>
      </button>
    </div>
  );
};

export default SingleCard;
