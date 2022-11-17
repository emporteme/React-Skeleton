import React from "react";
import './Header.css'


export const Header = () => {
  return(
    <header>
        {/*<Link to="/">Home</Link>
        <Link to="/blog">Blog</Link>
        <Link to="/about">About</Link>
  <Link to="/plan">Plan</Link>*/}
        <div className="nav__left">
          <p className="logo">ЦОС</p>
          <p>Журнал</p>
          <p>Акты</p>
          <p>Школа</p>
          <p>Контакты</p>
        </div>
        <div className="nav__right">
          <p>Войти</p>
          <div className="btn__blue">Зарегистрироваться</div>
        </div>
      </header>
  )
};
