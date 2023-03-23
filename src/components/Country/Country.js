import React from "react";
import "./Country.css";

const Country = (props) => {
  //console.log(props.country);
  const { name, population, area, flags } = props.country;
  return (
    <div className="country">
      <h1>Name: {name.common}</h1>
      <p>Population: {population}</p>
      <p>Area: {area}</p>
      <img src={flags.png} alt={name.common} />
    </div>
  );
};

export default Country;
