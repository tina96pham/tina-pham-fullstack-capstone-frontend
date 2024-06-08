import React from "react";
import Slider from "react-slick";
// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import WasteTypeCard from "../WasteTypeCard/WasteTypeCard";
import { useFetchWasteInfo } from "../../utils/useFetchData";

function WasteTypeList() {
  let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 2,
  };

  const { wasteInfo } = useFetchWasteInfo();
  return (
    <div className="waste-type">
      <Slider {...settings}>
      <div className="waste-type__container">
        <WasteTypeCard 
        key={wasteInfo.id} 
        wasteInfo={wasteInfo} />
      </div>
      </Slider>
    </div>
  
  );
}

export default WasteTypeList;
