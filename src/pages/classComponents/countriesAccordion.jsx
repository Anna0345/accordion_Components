import React, { Component } from "react";
import Countries from "./countriesAccordionItem";

class Accordion extends Component {
  constructor(props) {
    super(props);

    this.state = {
      countries: []
    };
  }

  componentDidMount() {
    fetch("https://countriesnow.space/api/v0.1/countries/capital")
      .then((response) => response.json())
      .then((res) => {
        const countries = res.data
        .filter((country) => country.capital !== "") 
        const shuffledCountries = countries.sort(() => Math.random() - 0.5);
        const randomCountries = shuffledCountries.slice(0, 15); // picks up 15 random values from the whole data
        this.setState({
          countries: randomCountries
        });
      })
      .catch((error) => {
        console.error( error);
      });
  }

  render() {
  

    return (
      <div className="accordion">
        {this.state.countries.map((country) => (
          <Countries
            key={country.name}
            country={country.name}
            capital={country.capital}
          />
        ))}
      </div>
    );
  }
}

export default Accordion;


 











