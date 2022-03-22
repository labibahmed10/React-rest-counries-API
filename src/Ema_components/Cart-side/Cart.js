import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import "./Cart.css";

const Cart = (props) => {
  const { item, tax, price, grandTotal } = props;

  return (
    <section className="main-cart">
      <div className="info-container">
        <h2>Order Summary</h2>

        <p>Selected Items : {item}</p>
        <p>Total Price : ${price}</p>
        <p>Total Shipping Charge : ${price < 1100 ? 15 : 25}</p>
        <p>Tax : ${tax}</p>
        <h3>Grand Total : ${grandTotal}</h3>

        <button className="btn-1">
          Clear Cart <FontAwesomeIcon icon={faTrashAlt}></FontAwesomeIcon>{" "}
        </button>

        <button className="btn-2">
          Review Order <FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon>
        </button>
      </div>
    </section>
  );
};

export default Cart;
