import "./HomePage.scss";
import Hero from "../../components/Hero/Hero";
import WasteTypeList from "../../components/WasteTypeList/WasteTypeList";
import WasteApi from "../../utils/waste-api";


function HomePage () {
const wasteApi = new WasteApi()
console.log(wasteApi.getAllWasteTypes())
  return (
    <div className="home-page">
      <Hero />
      <WasteTypeList/>

    </div>
  )
};

export default HomePage;