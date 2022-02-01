import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [navActive, setNavActive] = useState(false);

  return (
    <div className="flex justify-between px-8 py-4">
      <div className="flex items-center">
        {/* <img className="" src="" alt="logo" /> */}
        CafeMondo
      </div>
      <ul className="flex text-lg">
        <li className="px-4 py-2">
          <Link to="/about">카페몬도</Link>
          <ul>
            <li>브랜드 이야기</li>
            <li>메뉴안내</li>
          </ul>
        </li>
        <li className="px-4 py-2">
          <Link to="/">갤러리</Link>
          <ul>
            <li>몬도 소식</li>
            <li>매거진</li>
            <li>카페 바라보기</li>
          </ul>
        </li>
        <li className="px-4 py-2">
          <Link to="/">???</Link>
          <ul>
            <li>공지사항</li>
            <li>질문과 답변</li>
          </ul>
        </li>
        <li className="px-4 py-2">
          <Link to="/">만나러가기</Link>
          <ul>
            <li>오시는 길</li>
          </ul>
        </li>
      </ul>
      <div className="flex items-center">
        <Link to="/login">로그인</Link>
      </div>
    </div>
  );
};

export default Navbar;
