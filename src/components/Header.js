import React from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/components/Header.css';


const Header = () => (
  <header>
    <h1>Base React App</h1>
    <NavLink to="/"
      activeClassName="is-active">
        Home
    </NavLink>

    <NavLink to="/about">
      About
    </NavLink>
  </header>
)

export default Header;