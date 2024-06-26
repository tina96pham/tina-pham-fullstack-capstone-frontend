import "./HomePage.scss";
import Hero from "../../components/Hero/Hero";
import WasteTypeList from "../../components/WasteTypeList/WasteTypeList";

function HomePage() {
  return (
    <div className="home-page">
      <Hero />
      <div className="home-page__main">
        <h2 className="waste-type">Embrace the Circular Economy</h2>
        <WasteTypeList />
      </div>
    </div>
  );
}

export default HomePage;
