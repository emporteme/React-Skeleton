import React from "react";
import {Link} from 'react-router-dom'


export const NotFoundPage = () => {
  return (
    <div>
      This page doesn`t exist. Go <Link to="/">Home page</Link>
    </div>
  );
};
