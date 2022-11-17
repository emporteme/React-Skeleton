import React from "react";
import { MainHome } from "../../components/mainHome";
import { WhyUs } from "../../components/whyUs";
import { Animation } from "../../components/animation";
import { Rent } from "../../components/rent";
import { Unity } from "../../components/unity";
import "./HomePage.css";

export const HomePage = () => {
  return (
    <>
      <MainHome />
      <WhyUs/>
      <Animation/>
      <Rent/>
      <Unity/>
    </>
  );
};
