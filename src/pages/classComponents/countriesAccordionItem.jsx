
import React, { Component } from "react";
import { FaChevronUp, FaChevronDown } from "react-icons/fa";

class AccordionItem extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: false,
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState((prevState) => ({
      isOpen: !prevState.isOpen,
    }));
  }

  render() {
    const { country, capital } = this.props;

    return (
      <div className="countries-item">
        <div className="accordionOfCountries" onClick={this.handleClick}>
          {country}
          {this.state.isOpen ? <FaChevronUp /> : <FaChevronDown />}
        </div>
        {this.state.isOpen && (
          <div className="accordion-content">{capital}</div>
        )}
      </div>
    );
  }
}

export default AccordionItem;
