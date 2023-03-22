import { useState } from "react";
import { NavLink, Outlet } from "react-router-dom";

export function Layout() {
  const [showMenu, setShowMenu] = useState(false);

  function showMobileMenu() {
    setShowMenu(!showMenu);
  }

  function menuClassName({ isActive }) {
    return isActive ? "w3-bar-item w3-button w3-hide-small w3-padding-large w3-white" : "w3-bar-item w3-button w3-hide-small w3-padding-large w3-hover-white";
  }

  return (
    <>
      <div className="w3-top">
        <div className="w3-bar w3-red w3-card w3-left-align w3-large">
          <NavLink className="w3-bar-item w3-button w3-hide-medium w3-hide-large w3-right w3-padding-large w3-hover-white w3-large w3-red" title="Toggle Navigation Menu" onClick={showMobileMenu}><i className="fa fa-bars"></i></NavLink>
          <NavLink to="/" className={menuClassName}>Home</NavLink>
          <NavLink to="/projects" className={menuClassName}>Projects</NavLink>
          <NavLink to="/about" className={menuClassName}>About</NavLink>
          <NavLink to="/contact" className={menuClassName}>Contact</NavLink>
        </div>


          <div id="navDemo" className={`w3-bar-block w3-white w3-hide-large w3-hide-medium w3-large ${!showMenu ? 'w3-hide' : ''}`}>
            <NavLink to="/" className="w3-bar-item w3-button w3-padding-large">Home</NavLink>
            <NavLink to="/projects" className="w3-bar-item w3-button w3-padding-large">Projects</NavLink>
            <NavLink to="/about" className="w3-bar-item w3-button w3-padding-large">About</NavLink>
            <NavLink to="/contact" className="w3-bar-item w3-button w3-padding-large">Contact</NavLink>
          </div>
      </div>

      <Outlet />

      <footer className="w3-container w3-padding-64 w3-center w3-opacity">
        <div className="w3-xlarge w3-padding-32 w3-spacing">
          <i className="fa fa-facebook-official w3-hover-opacity"></i>
          <i className="fa fa-instagram w3-hover-opacity"></i>
          <i className="fa fa-snapchat w3-hover-opacity"></i>
          <i className="fa fa-pinterest-p w3-hover-opacity"></i>
          <i className="fa fa-twitter w3-hover-opacity"></i>
          <i className="fa fa-linkedin w3-hover-opacity"></i>
        </div>
        <p>Copyright to Viet vu</p>
      </footer>
    </>
  )
}
