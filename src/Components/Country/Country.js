import React from "react";
import "./Country.css";
import { useEffect, useState } from "react";
import ShowCountry from "../ShowCountry/ShowCountry";

const Country = () => {
  const [countries, getCountry] = useState([]);

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((data) => getCountry(data.slice(0, 50)));
  }, []);

  return (
    <div>
      <h1>Surfing to the countries about {countries.length}</h1>
      <div className="main">
        {countries.map((country) => (
          <ShowCountry country={country}></ShowCountry>
        ))}
      </div>
    </div>
  );
};

export default Country;
