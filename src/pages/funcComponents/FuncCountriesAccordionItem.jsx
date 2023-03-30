
import { useState } from 'react';
import { FaChevronUp, FaChevronDown } from 'react-icons/fa';

export default function AccordionItem({ country, capital }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleAccordionClick = () => {
    setIsOpen(prevState => !prevState);
  }

  return (
    <div className="countries-item">
      <div className="accordionOfCountries" onClick={handleAccordionClick}>
        {country}
        {isOpen ? <FaChevronUp /> : <FaChevronDown />}
      </div>
      {isOpen && (
        <div className="accordion-content">{capital}</div>
      )}
    </div>
  );
}





