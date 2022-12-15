import React from "react";
import { Link } from "react-router-dom";
import './header.css';

const Header = () => {
  return (
    <div className="header-employee">
      <div className="title">
        <h1>HRnet</h1>
      </div>
      <div className="container">
        <Link className="path-employee" to="/employees">View Current Employees</Link>
      </div>
    </div>
  );
};

export default Header;
