import React, { useState, useEffect } from "react";
import './App.css'
function App() {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    fetch("https://countriesnow.space/api/v0.1/countries/capital")
      .then((response) => response.json())
      .then((data) => setCountries(data.data));
  }, []);

  

  const [activeIndex, setActiveIndex] = useState(null);

  const handleClick = (index) => {
    if (index === activeIndex) {
      setActiveIndex(null);
    } else {
      setActiveIndex(index);

    }
  };
  
  
  return (
    <div className="App">
      {countries.map((country, index) => (
        <div key={index}>
          <div onClick={() => handleClick(index)} className="countries">
            <p>{country.name} <span className="button">+</span></p>
          </div>
          {activeIndex === index && (
            <div className="capitals">{country.capital || "No capital found"}</div>
          )}
        </div>
      ))}
    </div>
  );
}

export default App;
