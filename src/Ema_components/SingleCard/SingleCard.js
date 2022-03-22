import React from "react";
import "./SingleCard.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus } from "@fortawesome/free-solid-svg-icons";
import setDataToLocalDb from "../LocalStorage/LocalDB";

const SingleCard = (props) => {
  const { img, name, price, ratings, seller } = props.shoe;

  const { item, prices, tax, grandTotal, shipping, setPrice, setTax, setItem, setgrandTotal, setShipping } =
    props;

  const updatePrice = () => {
    setDataToLocalDb(props);
    setItem(item + 1);
    setPrice(prices + price);
    setShipping(prices + shipping < 1000 ? 10 : shipping + 10);
    setTax(tax + price * 0.1);
    setgrandTotal(price + grandTotal);
  };

  return (
    <div
      data-aos="fade-up"
      data-aos-duration="1000"
      data-aos-anchor-placement="center-bottom"
      className="cards"
    >
      <img src={img} alt="" />
      <div className="card-details">
        <h1>{name.length > 10 ? name.slice(0, 16) : name}</h1>
        <h4>Price : {price}$</h4>
        <p>Manufacturer : {seller} </p>
        <p>Rating : {ratings} </p>
      </div>
      <button onClick={updatePrice}>
        Add to Cart <FontAwesomeIcon icon={faCartPlus}></FontAwesomeIcon>
      </button>
    </div>
  );
};

export default SingleCard;
