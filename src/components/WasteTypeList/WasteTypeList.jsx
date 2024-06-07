import React from "react";
import Slider from "react-slick";
// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function WasteTypeList() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <Slider {...settings}
    className="waste-type">
      <div className="waste-type__container">
        <h3>1</h3>
      </div>
      <div className="waste-type__container">
        <h3>2</h3>
      </div>
      <div className="waste-type__container">
        <h3>3</h3>
      </div>
      <div className="waste-type__container">
        <h3>4</h3>
      </div>
      <div className="waste-type__container">
        <h3>5</h3>
      </div>
      <div className="waste-type__container">
        <h3>6</h3>
      </div>
      <div className="waste-type__container">
        <h3>7</h3>
      </div>
    </Slider>
  );
}

export default WasteTypeList;