import React from "react";
//import background from "/images/kran.png";
import "./Rent.css";

export const Rent = () => {
  return (
    <div className="rent">
      <div className="background">
        <img src="/images/kran.png" alt="kran" className="background__kran" />
      </div>
      <div className="content">
        <h1>Возможность аренды спец. техники</h1>
        <p>
          Благодаря большому выбору спец. техник, строительство в нашей стране
          ускориться на определенное количество раз. <br /> <br /> На нашей
          платформе будет возможность заказать/арендовать специальные техники
          для удобства и ускорения поиска разной техники.
        </p>
        <div className="bottom">
          <p>Список спец. техники</p>
          {/*<div className="line"></div>*/}
        </div>
      </div>
    </div>
  );
};
