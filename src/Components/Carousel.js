import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Carousel.css";

import Slider from "react-slick";
import React from "react";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", color: "black", top: "50%" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        top: "50%",
      }}
      onClick={onClick}
    />
  );
}
const Carousel = (props) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 700,
    arrows: true,
    autoplay: true,
    centerMode: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    focusOnSelect: true,
    variableWidth: true,
    pauseOnHover: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  var SliderElement = (
    <Slider {...settings}>
      {props.photos.map((photo, index) => {
        return (
          <div key={index}>
            <img
              style={{
                width: "98%",
                padding: 10,
              }}
              src={photo.url}
              alt={photo.name}
            ></img>
            <div className="overlay"></div>
          </div>
        );
      })}
    </Slider>
  );

  return SliderElement;
};

export default Carousel;
