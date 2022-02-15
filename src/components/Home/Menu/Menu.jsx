import React from "react";
import "./Menu.css";
import { Link } from "react-router-dom";

const Menu = () => {
  return (
    <div className="app__wrapper app__menu flex__center">
      <ul className="app__menu__carousel">
        <li className="menu__carousel__content flex__center">
          <Link to="#">
            <img src="" alt="" />
            <p className="content__name">브라질 어쩌구 커피</p>
            <p className="content__desc">달콤함, 과일향, 진함</p>
            <p className="content__const">10000원</p>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Menu;
