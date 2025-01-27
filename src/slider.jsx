import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './App.css'

export default function SimpleSlider() {
  var settings = {
    className: "",
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true
  };
  return (
    <Slider {...settings}>
      <div>
        <a href="#"><img class="bannerimage" src="https://i.pinimg.com/736x/ac/b4/42/acb44264b650e917c7c7841fc3eabc44.jpg" alt="" /></a>
      </div>
      <div>
        <a href="#"><img class="bannerimage" src="https://i.pinimg.com/736x/c4/9b/ec/c49becb192046721372614da8d01bb59.jpg" alt="" /></a>
      </div>
      <div>
        <a href="#"><img class="bannerimage" src="https://i.pinimg.com/736x/cf/f7/6d/cff76d14949b372fb9221c6001193142.jpg" alt="" /></a>
      </div>
    </Slider>
  );
}