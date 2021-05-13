import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => (
  <header>
    <NavLink to="/" activeClassName="is-active" exact={true}>Home</NavLink>
    <NavLink to="/about" activeClassName="is-active">About</NavLink>
    <NavLink to="/order" activeClassName="is-active" exact={true}>Order</NavLink>
    <NavLink to="/products" activeClassName="is-active">Products</NavLink>
    <NavLink to="/contact" activeClassName="is-active" exact={true}>Contact</NavLink>
  </header>
);

export default Header;
