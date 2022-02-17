import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  const infoStyle = {
    fontWeight: "200",
  };

  return (
    <div className="app__footer">
      <div className="app__footer__info">
        <h3>CAFFEEMONDO</h3>
        <p>
          Copyright 2021. <br />
          CAFFEEMONDO all rights reserved.
        </p>
      </div>
      <div>
        <ul className="app__footer__nav">
          <li className="app__footer__link">
            <Link to="/about">
              <span className="app__footer__nav__main">카페몬도</span>
            </Link>
            <ul className="app__footer__nav__sub">
              <li>브랜드 이야기</li>
              <li>공지사항</li>
            </ul>
          </li>
          <li className="app__footer__link">
            <Link to="/">
              <span className="app__footer__nav__main">MENU</span>
            </Link>
            <ul className="app__footer__nav__sub">
              <li>커피</li>
              <li>프라푸치노</li>
              <li>과일쥬스</li>
              <li>차</li>
              <li>스무디</li>
              <li>아이스크림</li>
            </ul>
          </li>
          <li className="app__footer__link">
            <Link to="/">
              <span className="app__footer__nav__main">갤러리</span>
            </Link>
            <ul className="app__footer__nav__sub">
              <li>몬도 소식</li>
              <li>매거진</li>
              <li>카페 바라보기</li>
            </ul>
          </li>
          <li className="app__footer__link">
            <Link to="/">
              <span className="app__footer__nav__main">만나러가기</span>
            </Link>
            <ul className="app__footer__nav__sub">
              <li>오시는 길</li>
            </ul>
          </li>
        </ul>
      </div>
      <div className="app__footer__social">
        <p>SNS</p>
        <ul className="social__links">
          <li id="social__facebook">
            <ion-icon name="logo-facebook"></ion-icon>
          </li>
          <li id="social__instagram">
            <ion-icon name="logo-instagram"></ion-icon>
          </li>
          <li id="social__youtube">
            <ion-icon name="logo-youtube"></ion-icon>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
