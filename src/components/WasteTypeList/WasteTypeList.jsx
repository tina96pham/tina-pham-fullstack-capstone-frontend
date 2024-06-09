import React, {useRef} from "react";
import "./WasteTypeList.scss";
import WasteTypeCard from "../WasteTypeCard/WasteTypeCard";
import { useFetchWasteInfo } from "../../utils/useFetchData";
import Loading from "../Loading/Loading";
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';  // Optional, for pagination dots
import 'swiper/css/navigation';

function WasteTypeList() {
  const { wasteData, loading } = useFetchWasteInfo();
  const swiperRef = useRef(null);
  
  return (
    <>
    {loading ? (
      <Loading/>
    ) : (
    <div className="waste-type">
     <Swiper
          ref={swiperRef}
          modules={[EffectCoverflow, Pagination, Navigation]}
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          loop={true}
          slidesPerView={"auto"}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: false,
          }}
          breakpoints={{ 
            0: { slidesPerView: 1}, 
            768: { slidesPerView: 3 },
            1024: { slidesPerView: 4 }, 
          }}
        >
          {wasteData.map((item) => (
            <SwiperSlide key={item.id}>
              <WasteTypeCard item={item} />
            </SwiperSlide>
          ))}
        </Swiper>
    </div>
    )}
    </>
  );
}

// import Slider from "react-slick";
// // Import css files
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

/*
function WasteTypeList() {

  const { wasteData, loading } = useFetchWasteInfo();
  console.log("Fetadat", wasteData)
  
  if (loading) {
    return <div className="loading">Loading...</div>;
  }

  return (
  
    <div className="waste-type">
        {wasteData.map((item) => (
        <WasteTypeCard 
          key={item.id} 
          wasteType={item.name} 
          wasteInfo={item}  
        />
      ))}
      
    </div>
  
  );
}
*/

export default WasteTypeList;
