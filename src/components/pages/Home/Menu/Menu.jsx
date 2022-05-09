import React from "react";
import "./Menu.css";
import { menuInfo } from "../../../../constants";
import Card from "./Card";

const Menu = () => {

  const cardActive = (e) => {
    const card = document.querySelectorAll('.app__menu__card');
    card.forEach((c) => {
      c.classList.remove('active');
    })
    e.currentTarget.classList.add('active');
  }

  const cardRemoveActive = (e) => {
    const card = document.querySelectorAll('.app__menu__card');
    card.forEach((c) => {
      c.classList.remove('active');
    })
  }

  return (
    <div className="app__wrapper app__menu flex__center section_padding">
      <h2 className="app__menu__title">MENU</h2>
      <ul className="app__menu__cards" onMouseLeave={cardRemoveActive}>
        {
          menuInfo.menu.map((card) => 
          <Card card={card} cardActive={cardActive} />
          )
        }
      </ul>
      <p className="app__menu__subtitle">정성을 담아 오늘도 당신에게 다가갑니다. </p>
    </div>
  );
};

export default Menu;
