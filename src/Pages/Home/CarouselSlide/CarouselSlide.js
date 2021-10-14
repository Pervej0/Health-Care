import React from "react";
import { Carousel } from "react-bootstrap";
import Slide1 from "../../../Images/slider/slide1.jpg";
import Slide2 from "../../../Images/slider/slide2.jpg";
import Slide3 from "../../../Images/slider/slide3.jpg";
import Slide4 from "../../../Images/slider/slide4.jpg";
import "./CarouselSlide.css";

const CarouselSlide = () => {
  return (
    <Carousel>
      <Carousel.Item className="slider-item" interval={1000}>
        <img
          className="d-block w-100 img-fluid"
          src={Slide1}
          alt="First slide"
        />
        <Carousel.Caption
          className="p-2"
          style={{ backgroundColor: "rgba(0,0,0,.4)" }}
        >
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={500} className="slider-item">
        <img className="d-block w-100" src={Slide2} alt="Second slide" />
        <Carousel.Caption
          className="p-2"
          style={{ backgroundColor: "rgba(0,0,0,.4)" }}
        >
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className="slider-item">
        <img className="d-block w-100" src={Slide3} alt="Third slide" />
        <Carousel.Caption
          className="p-2"
          style={{ backgroundColor: "rgba(0,0,0,.4)" }}
        >
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className="slider-item">
        <img className="d-block w-100" src={Slide4} alt="Fourth slide" />
        <Carousel.Caption
          className="p-2"
          style={{ backgroundColor: "rgba(0,0,0,.4)" }}
        >
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default CarouselSlide;
