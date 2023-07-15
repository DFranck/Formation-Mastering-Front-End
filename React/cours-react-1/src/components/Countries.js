import React, { useEffect, useState } from "react";
import axios from "axios";

const Countries = () => {
  const [data, setData] = useState([]);
  // Le useEffect() se joue lorsque le composant est monté
  useEffect(() => {
    axios.get("https://restcountries.com/v3.1/all").then((res) => {
      console.log(res.data);
    });
  }, []);

  return (
    <div className="countries">
      <h1>Countries</h1>
    </div>
  );
};

export default Countries;
