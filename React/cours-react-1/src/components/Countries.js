import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "./Card";

const Countries = () => {
  const [data, setData] = useState([]);
  const [rangeValue, setRangeValue] = useState(36);
  const [selectedRadio, setSelectedRadio] = useState("");
  const radios = ["Africa", "America", "Asia", "Europe", "Oceania"];
  // Le useEffect() se joue lorsque le composant est monté
  useEffect(() => {
    axios.get("https://restcountries.com/v3.1/all").then((res) => {
      setData(res.data);
    });
  }, []);

  return (
    <div className="countries">
      <ul className="radio-container">
        <input
          type="range"
          min={1}
          max={250}
          defaultValue={rangeValue}
          onChange={(e) => {
            setRangeValue(e.target.value);
          }}
        />
        {radios.map((continent) => (
          <li>
            <input
              type="radio"
              id={continent}
              name="continentRadio"
              checked={continent === selectedRadio}
              onChange={(e) => setSelectedRadio(e.target.id)}
            />
            <label htmlFor={continent}>{continent}</label>
          </li>
        ))}
      </ul>
      {selectedRadio && (
        <button
          onClick={() => {
            setSelectedRadio("");
          }}
        >
          Annuler la recherche
        </button>
      )}
      <ul>
        {data
          .filter(
            (country) =>
              country.continents &&
              country.continents[0] &&
              country.continents[0].includes(selectedRadio)
          )
          .slice(0, rangeValue)
          .sort((a, b) => b.population - a.population)
          .map((country) => (
            <Card key={country.translations.fra.common} country={country} />
          ))}
      </ul>
    </div>
  );
};

export default Countries;
