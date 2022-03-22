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

  // cart money part

  const [item, setItem] = useState(0);
  const [price, setPrice] = useState(0);
  const [grandTotal, setgrandTotal] = useState(0);
  const [tax, setTax] = useState(0);

  return (
    <section className="main-container">
      <div className="product-container">
        {shoes.map((shoe) => (
          <SingleCard
            key={shoe.id}
            shoe={shoe}
            item={item}
            tax={tax}
            prices={price}
            grandTotal={grandTotal}
            setTax={setTax}
            setItem={setItem}
            setPrice={setPrice}
            setgrandTotal={setgrandTotal}
          ></SingleCard>
        ))}
      </div>

      <div className="cart-container">
        <Cart item={item} price={price} grandTotal={grandTotal} tax={tax}></Cart>
      </div>
    </section>
  );
};

export default Shop;
