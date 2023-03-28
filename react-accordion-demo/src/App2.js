import React, { Component } from "react";
import "./App.css"


class App2 extends Component {

  state = { countries: [],activeIndex: null}
    
   
  componentDidMount() {
    fetch("https://countriesnow.space/api/v0.1/countries/capital")
      .then((response) => response.json())
      .then((res) => this.setState({ countries: res.data }));
  }

   handleClick = (index) => {
    if (index === this.state.activeIndex) {
      this.setState({ activeIndex: null });
    } else {
      this.setState({ activeIndex: index });
    }
  }
  render() {
      console.log(this.state.countries)
    
    return (
      <div className="App">
        {this.state.countries.map((country, index) => (
          <div key={index}>
            <div onClick={() => this.handleClick(index)} className="countryDiv">
              <p className="capitalName">{country.name} <span>+</span></p>
            </div>
            {this.state.activeIndex === index && (
              <div>{country.capital}</div>
            )}
            
          </div>
        ))}
      </div>
    );
  }
}

export default App2;
