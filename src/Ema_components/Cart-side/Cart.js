import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import "./Cart.css";

const Cart = (props) => {
  const { setPrice, setTax, setItem, setgrandTotal, setShipping, item, tax, price, grandTotal, shipping } =
    props;

  const clearingCart = () => {
    setItem(item * 0);
    setPrice(price * 0);
    setShipping(shipping * 0);
    setTax(tax * 0);
    setgrandTotal(grandTotal * 0);
  };

  return (
    <section className="main-cart">
      <div className="info-container">
        <h2>Order Summary</h2>

        <p>Selected Items : {item}</p>
        <p>Total Price : ${price}</p>
        <p>Total Shipping Charge : ${shipping}</p>
        <p>Tax : ${tax.toString().slice(0, 4)}</p>
        <h3>Grand Total : ${grandTotal + tax + shipping}</h3>

        <button onClick={clearingCart} className="btn-1">
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
