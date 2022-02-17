import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const [navActive, setNavActive] = useState(false);
  const [navShow, setNavShow] = useState(true);

  function navActiveToggle() {
    setNavActive(!navActive);
    console.log(navActive);
  }

  useEffect(() => {
    window.addEventListener('scroll', navOn)
    return () => {
      window.removeEventListener('scroll', navOn)
    }
  },[navShow])

  function navOn () {
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
        <div className="app__navbar-toggle">
          <ion-icon name="menu-outline"></ion-icon>
        </div>
        <ul
          className="app__navbar-nav"
          onMouseEnter={navActiveToggle}
          onMouseLeave={navActiveToggle}
        >
          <li className="app__navbar-link">
            <Link to="/about"><span className="app__navbar-link__main">카페몬도</span></Link>
            <ul className="app__navbar-link__sub">
              <li>브랜드 이야기</li>
              <li>공지사항</li>
            </ul>
          </li>
          <li className="app__navbar-link">
            <Link to="/"><span className="app__navbar-link__main">MENU</span></Link>
            <ul className="app__navbar-link__sub">
              <li>커피</li>
              <li>프라푸치노</li>
              <li>과일쥬스</li>
              <li>차</li>
              <li>스무디</li>
              <li>아이스크림</li>
            </ul>
          </li>
          <li className="app__navbar-link">
            <Link to="/"><span className="app__navbar-link__main">갤러리</span></Link>
            <ul className="app__navbar-link__sub">
              <li>몬도 소식</li>
              <li>매거진</li>
              <li>카페 바라보기</li>
            </ul>
          </li>          
          <li className="app__navbar-link">
            <Link to="/"><span className="app__navbar-link__main">만나러가기</span></Link>
            <ul className="app__navbar-link__sub">
              <li>오시는 길</li>
            </ul>
          </li>
        </ul>
        <div className="app__navbar-login">
          <Link to="/auth">로그인</Link>
          <Link to="/auth">회원가입</Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
