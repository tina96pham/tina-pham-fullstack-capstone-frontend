import "./Hero.scss";
import heroImage from "../../assets/images/EconomyCircular.gif"

function Hero () {

  return (
    <div className="hero">
      <div className="hero__content">
        <h1 className="hero__header">Welcome to Refine</h1>
        <p className="hero__subheader">Your personal assistant for sustainable waste management and pollution reduction</p>
      </div>
      <img className="hero__image" src={heroImage} alt="Circular Economy" />
    </div>
  )    
};

export default Hero;