import React from "react";
import { Link } from "react-router-dom";
import './Header.css'


export const Header = () => {
  return(
    <header>
        <Link to="/">Home</Link>
        <Link to="/blog">Blog</Link>
        <Link to="/about">About</Link>
        <Link to="/plan">Plan</Link>
      </header>
  )
};
