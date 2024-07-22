import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import React, { Component } from "react";
import Slider from "react-slick";
import img from './Ellipse.png'

function Testimonialslider() {
  const settings = {
    dots: true,
    lazyLoad: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 2,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 5000,
    cssEase: "linear"
  };
  return (
    <div className="slider-container">
      <Slider {...settings}>
        <div className="flex flex-col justify-center items-center text-center p-4">
            <p>Working with Induz has been a game-changer for our manufacturing operations. Their precision-engineered machinery and expert guidance have not only improved efficiency but also reduced downtime significantly. It's more than a partnership; it's a strategic advantage.</p>
            <div className="flex flex-row justify-center items-center mt-8 gap-2">
                <img src={img} alt="" />
                <div className="flex flex-col">
                    <h1>John Smith</h1>
                    <p>Industrialist</p>
                </div>
            </div>
        </div>
        <div className="flex flex-col justify-center items-center text-center p-4">
            <p>Working with Induz has been a game-changer for our manufacturing operations. Their precision-engineered machinery and expert guidance have not only improved efficiency but also reduced downtime significantly. It's more than a partnership; it's a strategic advantage.</p>
            <div className="flex flex-row justify-center items-center mt-8 gap-2">
                <img src={img} alt="" />
                <div className="flex flex-col">
                    <h1>John Smith</h1>
                    <p>Industrialist</p>
                </div>
            </div>
        </div>
        <div className="flex flex-col justify-center items-center text-center p-4">
            <p>Working with Induz has been a game-changer for our manufacturing operations. Their precision-engineered machinery and expert guidance have not only improved efficiency but also reduced downtime significantly. It's more than a partnership; it's a strategic advantage.</p>
            <div className="flex flex-row justify-center items-center mt-8 gap-2">
                <img src={img} alt="" />
                <div className="flex flex-col">
                    <h1>John Smith</h1>
                    <p>Industrialist</p>
                </div>
            </div>
        </div>
        <div className="flex flex-col justify-center items-center text-center p-4">
            <p>Working with Induz has been a game-changer for our manufacturing operations. Their precision-engineered machinery and expert guidance have not only improved efficiency but also reduced downtime significantly. It's more than a partnership; it's a strategic advantage.</p>
            <div className="flex flex-row justify-center items-center mt-8 gap-2">
                <img src={img} alt="" />
                <div className="flex flex-col">
                    <h1>John Smith</h1>
                    <p>Industrialist</p>
                </div>
            </div>
        </div>
      </Slider>
    </div>
  );
}

export default Testimonialslider;

