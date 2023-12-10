import React from "react";
import { useState } from "react";

//imported icons
import { SiConsul } from "react-icons/si";
import { BsPhoneVibrate } from "react-icons/bs";
import { AiOutlineGlobal } from "react-icons/ai";
import { CgMenuGridO } from "react-icons/cg";

//imported images
import logo from "../../assets/logo.png";

const Navbar = () => {
  //let us remove the navbar in the width screens ===>

  const [active, setActive] = useState("navBarMenu");
  const showNavBar = () => {
    setActive("navBarMenu showNavBar");
  };

  const removeNavbar = () => {
    setActive("navBarMenu");
  };

  //let us add a background color to the second navbar

  const [noBg, addBg] = useState("navBarTwo");
  const addBgColor = () => {
    if (window.scrollY >= 9) {
      addBg("navBarTwo navbar_With_Bg");
    }else{
      addBg('navBarTwo')
    }
  };

  window.addEventListener('scroll',addBgColor)

  return (
    <div className="navBar flex">
      <div className="navBarOne flex">
        <div>
          <SiConsul className="icon" />
        </div>
        <div className="none flex">
          <li className="flex">
            <BsPhoneVibrate className="icon" />
            &nbsp; Support
          </li>
          <li className="flex">
            <AiOutlineGlobal className="icon" />
            &nbsp; Languages
          </li>
        </div>
        <div className="atb flex">
          <span>Sign In</span>
          <span>Sign Out </span>
        </div>
      </div>
      <div className={noBg}>
        <div className="logoDiv">
          <img src={logo} />
        </div>
        <div className={active}>
          <ul className="menu flex">
            <li onClick={removeNavbar} className="listItem">
              <a href="#home">Home</a>
            </li>
            <li onClick={removeNavbar} className="listItem">
              <a href="#about">About</a>
            </li>
            <li onClick={removeNavbar} className="listItem">
              <a href="#offers">Offers</a>
            </li>
            <li onClick={removeNavbar} className="listItem">
              <a href="#seats">Seats</a>
            </li>
            <li onClick={removeNavbar} className="listItem">
              <a href="#destinations">Destinations</a>
            </li>
            <button onClick={removeNavbar} className="btn flex btnOne">
              Contact
            </button>
          </ul>

          {/* <button className="btn flex btnTwo">Contact</button> */}
        </div>

        <div onClick={showNavBar} className="toggleIcon">
          <CgMenuGridO className="icon" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
