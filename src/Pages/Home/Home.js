import React from "react";
import About from "../About/About";
import Experts from "../Experts/Experts";
import Services from "../Services/Services";
import CarouselSlide from "./CarouselSlide/CarouselSlide";

const Home = () => {
  return (
    <div>
      <CarouselSlide />
      <Services />
      <About />
      <Experts />
    </div>
  );
};

export default Home;
