import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './App.css'
import youtubechamado from '/chamado-yout.svg'


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
          <a target="_blank" href="https://www.youtube.com/@Crazygamer-sp7wg"><img class="bannerimage" src={youtubechamado} alt="Call for Youtube" /></a>
        </div>
        <div key={2}>
          <a target="_blank" href="https://docs.google.com/document/d/1FUJEYz4A2t2Dhm6NErIoaQtFDuzMhdo7Uf3SWjt1Cwc/edit?tab=t.6gztgvoqry37"><img class="bannerimage" src="https://i.pinimg.com/736x/c4/9b/ec/c49becb192046721372614da8d01bb59.jpg" alt="" /></a>
        </div>
        <div key={3}>
          <a target="_blank" href="https://docs.google.com/document/d/1FUJEYz4A2t2Dhm6NErIoaQtFDuzMhdo7Uf3SWjt1Cwc/edit?tab=t.6gztgvoqry37"><img class="bannerimage" src="https://i.pinimg.com/736x/cf/f7/6d/cff76d14949b372fb9221c6001193142.jpg" alt="" /></a>
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