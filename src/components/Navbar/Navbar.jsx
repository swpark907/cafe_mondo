import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { navList } from "../../constants";
import NavbarList from "./NavbarList";

const Navbar = () => {
  const [navActive, setNavActive] = useState(false);
  const [navShow, setNavShow] = useState(true);
  const [isNavToggle, setIsNavToggle] = useState(false);
  const [navFixed, setNavFixed] = useState(false);

  function navToggleHandler() {
    setIsNavToggle(!isNavToggle);
  }

  function navActiveHandler() {
    setNavActive(!navActive);
    console.log(navActive);
  }

  useEffect(() => {
    window.addEventListener('scroll', navShowHandler)
    return () => {
      window.removeEventListener('scroll', navShowHandler)
    }
  },[navShow])

  function navShowHandler () {
    if(window.scrollY > 300 && navShow){
      setNavShow(false)
      setNavFixed(true);
      return ;
    }
    if(window.scrollY <= 300 && !navShow){
      setNavShow(true);
      setNavFixed(false);
      return;
    }
  }

  return (
    <div className={"app__navbar" + (navActive === false ? "" : " active") + (navShow ? "" : " on") + (navFixed ? " fixed" : "")}>
      <div className="app__navbar-container">
        <div className="app__navbar-logo">
          <Link to="/">CAFFEMONDO</Link>
        </div>
        <div className="app__navbar-toggle" onClick={navToggleHandler}>
          <ion-icon name="menu-outline"></ion-icon>
        </div>
        <ul
          className={"app__navbar-nav" + (isNavToggle === false ? "" : " toggle")}
          onMouseEnter={navActiveHandler}
          onMouseLeave={navActiveHandler}          
        >{
          navList.map((main, index) => (
            <NavbarList main={main} key={index}/>
          ))
        }
        </ul>
        <div className="app__navbar-login">
          <Link to="/login">로그인</Link>
          <Link to="/register">회원가입</Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
