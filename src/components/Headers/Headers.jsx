import "./Headers.scss"
import logo from "../../assets/logo/REFINE - logo.svg"
import { NavLink } from "react-router-dom";


function Headers() {
  return (
    <div className="header">
      <img className="header__logo" src={logo} alt="Refine Logo" />
      <NavLink  className="header__home" to="/">HOME</NavLink>
      <div className="header__container">
        <NavLink to="/log" className="header__link">My Progress</NavLink>
        <NavLink to="/tracker" className="header__link">Waste Log</NavLink>
      </div>
    </div>
  );
}

export default Headers;