import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import "./Cart.css";

const Cart = () => {
  return (
    <section className="main-cart">
    
      <div className="info-container">
        <h2>Order Summary</h2>

        <p>Selected Items : </p>
        <p>Total Price : </p>
        <p>Total Shipping Charge : </p>
        <p>Tax : </p>
        <h3>Grand Total : $</h3>

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
