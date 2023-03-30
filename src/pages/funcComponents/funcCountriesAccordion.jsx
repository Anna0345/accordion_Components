import React, { useState, useEffect } from 'react';
import Countries from '../classComponents/countriesAccordionItem';

function Accordion() {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    fetch('https://countriesnow.space/api/v0.1/countries/capital')
      .then(response => response.json())
      .then(res => {
        const countries = res.data
          .filter(country => country.capital !== '') // Filter out countries with empty capital
          .slice(0, 40)
        setCountries(countries);
      })
      .catch(error => {
        console.error('Error fetching data: ', error);
      });
  }, []);

  return (
    <div className="accordion">
      {countries.map(country => (
        <Countries
          key={country.name}
          country={country.name}
          capital={country.capital}
        />
      ))}
    </div>
  );
}

export default Accordion;



 











