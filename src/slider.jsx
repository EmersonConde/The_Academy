import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './App.css'
import youtubechamado from '/chamado-yout.svg'
import youtchamadomob from '/chamado-yout-mobile.svg'
import instagramchamado from '/chamado-inst.svg'
import instchamadomob from '/chamado-inst-mobile.svg'

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "none" }}
      onClick={onClick} 
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "none" }}
      onClick={onClick}
    />
  );
}

export default function SimpleSlider() {
  let sliderRef = useRef(null);
  const next = () => {
    sliderRef.slickNext();
  };
  const previous = () => {
    sliderRef.slickPrev();
  };
  var settings = {
    dotsClass: "slick-dots",
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
    speed: 500,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />
  };
  return (
    <div class="meu-slid">
      <Slider
      ref={slider => {
        sliderRef = slider;
      }}
       {...settings}>
        <div key={1}>
          <a target="_blank" href="https://www.youtube.com/@Crazygamer-sp7wg">
            <picture>
              <source media="(max-width: 800px)" srcset={youtchamadomob} />
              <img class="bannerimage" src={youtubechamado} alt="Call for Youtube" />
            </picture>
          </a>
        </div>
        <div key={2}>
          <a target="_blank" href="https://www.instagram.com/bladesandmagicrpg/">
          <picture>
            <source media="(max-width: 800px)" srcset={instchamadomob} />
            <img class="bannerimage" src={instagramchamado} alt="Call for Instagram" />
          </picture>
          </a>
        </div>
      </Slider>
      <div style={{ textAlign: "center" }}>
        <button className="button" onClick={previous}>
          Previous
        </button>
        <button className="button" onClick={next}>
          Next
        </button>
      </div>
    </div>
  );
}