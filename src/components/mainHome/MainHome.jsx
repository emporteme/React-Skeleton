import React from "react";
import "./MainHome.css";

export const MainHome = () => {
  return (
    <div className="main">
      <h1>Цифровизация <br/> строительства Казахстана</h1>
      <div className="map">
        <img src="/images/Map.png" alt="map" className="map_main" />
      </div>
      <div className="after">
        <p>Просмотр видео о платформе ЦОС</p>
        <img src="/images/play-cricle.png" alt="icon" className="map_icon" />
      </div>
    </div>
  );
};
