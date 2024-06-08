import React from "react";
import "./WasteTypeList.scss";
import WasteTypeCard from "../WasteTypeCard/WasteTypeCard";
import { useFetchWasteInfo } from "../../utils/useFetchData";
import Loading from "../Loading/Loading";

function WasteTypeList() {
  const { wasteData, loading } = useFetchWasteInfo();

  
  return (
    <>
    {loading ? (
      <Loading/>
    ) : (
    <div className="waste-type">
      {wasteData.map((item) => (
      <WasteTypeCard 
        key={item.id} 
        wasteType={item.name} 
        wasteInfo={item} 
      />
      ))
    }
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
