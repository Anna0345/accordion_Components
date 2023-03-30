import React from "react";
import { BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import Accordion from "./pages/classComponents/countriesAccordion";
import FuncAccordion from "./pages/funcComponents/funcCountriesAccordion";

import './App.css';

export default function App() {

  return (
    <Router>
      <nav className="navbar">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link to="/" className="nav-link">Class Components Accordion</Link>
          </li>
          <li className="nav-item">
            <Link to="/functionalComponents" className="nav-link">Functional Components Accordion</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route exact path="/" element={<Accordion />} />
        <Route exact path="/functionalComponents" element={<FuncAccordion />} />
      </Routes>
    </Router>
  );
};








