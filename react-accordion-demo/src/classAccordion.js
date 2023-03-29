import React, { Component } from "react";
import "./App.css"

class App extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
          countries: [],
          activeIndex: null,
          id: this.props
        };
    }
    
  componentDidMount() {
    fetch(`http://localhost:3001/countries?limit=7&offset=0`)
      .then((response) => response.json())
      .then((res) => this.setState({ countries: res.data }));
  }

  componentDidUpdate(prevProps) {
    if (prevProps.id !== this.props.id) {
      this.setState({ id: this.props.id });
    }
  }
  

  handleClick = (index) => {
    if (index === this.state.activeIndex) {
      this.setState({ activeIndex: null });
    } else {
      this.setState({ activeIndex: index });
    }
  }

  render() {
    console.log(this.state.id);
    return (
      <div className="App">
        {this.state.countries.map((country, index) => (
          <div key={index} className="itemDiv">
            <div onClick={() => this.handleClick(index)} className="countryDiv">
              <p className="capitalName">{country.name}</p> <span className="plusCapital">+</span>
            </div>
            {this.state.activeIndex === index && (
              <div className="capitalDiv">{country.capital}</div>
            )}
          </div>
        ))}
      </div>
    );
  }
}

export default App;
