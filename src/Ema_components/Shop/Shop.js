import React, { useEffect, useState } from "react";
import Cart from "../Cart-side/Cart";
import SingleCard from "../SingleCard/SingleCard";
import "./Shop.css";

const Shop = () => {
  const [shoes, setShoes] = useState([]);
  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => setShoes(data));
  }, []);
  return (
    <section className="main-container">
      <div className="product-container">
        {shoes.map((shoe) => (
          <SingleCard key={shoe.id} item={shoe}></SingleCard>
        ))}
      </div>

      <div className="cart-container">
        <Cart></Cart>
      </div>
    </section>
  );
};

export default Shop;
