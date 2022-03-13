import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { navList } from "../../constants";
import NavbarList from "./NavbarList";

const Navbar = () => {
  const [navActive, setNavActive] = useState(false);
  const [navShow, setNavShow] = useState(true);
  const [isNavToggle, setIsNavToggle] = useState(false);

  function navToggleHandler() {
    setIsNavToggle(!isNavToggle);
  }

  function navActiveHandler() {
    setNavActive(!navActive);
    console.log(navActive);
  }

  useEffect(() => {
    window.addEventListener('scroll', navShowHadler)
    return () => {
      window.removeEventListener('scroll', navShowHadler)
    }
  },[navShow])

  function navShowHadler () {
    if(window.scrollY > 300 && navShow){
      setNavShow(false)
      return ;
    }
    if(window.scrollY <= 300 && !navShow){
      setNavShow(true);
      return;
    }
  }

  return (
    <div className={"app__navbar" + (navActive === false ? "" : " active") + (navShow ? "" : " on")}>
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
          <Link to="/sign_in">로그인</Link>
          <Link to="/sign_up">회원가입</Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
