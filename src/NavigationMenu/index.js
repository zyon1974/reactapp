import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

const NavigationMenu = () => {
    return (
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/users">users</Link>
          </li>
        </ul>
      </nav>
    );
  };

  export default NavigationMenu