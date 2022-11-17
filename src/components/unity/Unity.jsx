import React from "react";
import "./Unity.css";

export const Unity = () => {
  return (
    <div className="unity">
      <div className="left">
        <h1>Единое согласование</h1>
        <p>
          Благодаря большому выбору спец. техник, строительство в нашей стране
          ускориться на определенное количество раз. <br />
          <br /> На нашей платформе будет возможность заказать/арендовать
          специальные техники для удобства и ускорения поиска разной техники. На
          нашей платформе будет возможность заказать/арендовать специальные
          техники для удобства и ускорения поиска разной техники.
        </p>
        <div className="bottom">
          <p>Перейти в список согласовании</p>
          <div className="line"></div>
        </div>
      </div>
      <div className="right">
        <img src="/images/last.png" alt="circle" className="circle" />
      </div>
    </div>
  );
};
