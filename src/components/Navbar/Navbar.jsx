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
    <div className={navActive === false ? "app_navbar" : "app_navbar active"}>
      <div className="app_navbar-container">
        <div className="app_navbar-logo">
          <Link to="/">Cafe Mondo</Link>
        </div>
        <div className="app_navbar-menu">
          <ion-icon name="menu-outline"></ion-icon>
        </div>
        <ul
          className="app_navbar-nav active"
          onMouseEnter={navActiveToggle}
          onMouseLeave={navActiveToggle}
        >
          <li className="app_navbar-link">
            <Link to="/about">카페몬도</Link>
            <ul className="app_navbar-link_sub">
              <li>브랜드 이야기</li>
              <li>메뉴안내</li>
            </ul>
          </li>
          <li className="app_navbar-link">
            <Link to="/">갤러리</Link>
            <ul className="app_navbar-link_sub">
              <li>몬도 소식</li>
              <li>매거진</li>
              <li>카페 바라보기</li>
            </ul>
          </li>
          <li className="app_navbar-link">
            <Link to="/">???</Link>
            <ul className="app_navbar-link_sub">
              <li>공지사항</li>
              <li>질문과 답변</li>
            </ul>
          </li>
          <li className="app_navbar-link">
            <Link to="/">만나러가기</Link>
            <ul className="app_navbar-link_sub">
              <li>오시는 길</li>
            </ul>
          </li>
        </ul>
        <div className="app_navbar-login">
          <Link to="/login">로그인</Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
