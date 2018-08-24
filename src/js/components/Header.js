import React from 'react';
import { NavLink } from "react-router-dom";

const Header = () => (
  <header className="primary-header">
    <h1 className="text-center mt-3">Welcome to the test app!</h1>
    <nav className="nav nav-pills bg-light">
      <NavLink to="/" exact className="nav-link" activeClassName="active">Home</NavLink>
      <NavLink to="/articles" className="nav-link" activeClassName="active">Articles</NavLink>
      <NavLink to="/cat" className="nav-link" activeClassName="active">Cat</NavLink>
    </nav>
  </header>
);

export default Header;