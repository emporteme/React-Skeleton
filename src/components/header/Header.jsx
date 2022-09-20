import React from "react";
import { Link } from "react-router-dom";
import './Header.css'


export const Header = () => {
  return(
    <header>
        <Link to="/">Home</Link>
        <Link to="/posts">Blog</Link>
        <Link to="/about">About</Link>
      </header>
  )
};
