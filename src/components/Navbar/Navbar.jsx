import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const [navActive, setNavActive] = useState(false);

  function navActiveToggle() {
    setNavActive(!navActive);
    console.log(navActive);
  }

  return (
    <div className={navActive === false ? "app__navbar" : "app__navbar active"}>
      <div className="app__navbar-container">
        <div className="app__navbar-logo">
          <Link to="/">CAFFEMONDO</Link>
        </div>
        <div className="app__navbar-menu">
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
              <li>메뉴안내</li>
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
            <Link to="/"><span className="app__navbar-link__main">???</span></Link>
            <ul className="app__navbar-link__sub">
              <li>공지사항</li>
              <li>질문과 답변</li>
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
          <Link to="/login">로그인</Link>
          <Link to="/join">회원가입</Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
