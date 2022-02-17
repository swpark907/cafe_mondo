import React from "react";
import "./Menu.css";
import { Link } from "react-router-dom";
import { images } from "../../../constants";

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
        <li className="app__menu__card" onMouseOver={cardActive}>
          <img src={images.menuCoffee} alt="menu-coffee" />
          <div className="card__label">
            <h3 className="card__label__name">COFFEE</h3>
            <p className="card__label__info">따뜻한 커피로 하루를 시작해보세요.</p>
          </div>
        </li>
        <li className="app__menu__card" onMouseOver={cardActive}>
          <img src={images.menuFrappucino} alt="menu-frappucino" />
          <div className="card__label">
            <h3 className="card__label__name">FRAPPUCINO</h3>
            <p className="card__label__info">시원함으로 활기찬 하루를 보내세요</p>
          </div>
        </li>
        <li className="app__menu__card" onMouseOver={cardActive}>
          <img src={images.menuFreshjuice} alt="menu-freshjuice" />
          <div className="card__label">
            <h3 className="card__label__name">FRESH JUICE</h3>
            <p className="card__label__info">매일 아침 신선한 과일로 갈아드립니다.</p>
          </div>
        </li>
        <li className="app__menu__card" onMouseOver={cardActive}>
          <img src={images.menuTea} alt="menu-tea" />
          <div className="card__label">
            <h3 className="card__label__name">TEA</h3>
            <p className="card__label__info">차분한 분위기와 함께 한잔의 차를</p>
          </div>
        </li>
        <li className="app__menu__card" onMouseOver={cardActive}>
          <img src={images.menuSmoothie} alt="menu-smoothie" />
          <div className="card__label">
            <h3 className="card__label__name">SMOOTHIE</h3>
            <p className="card__label__info">달달한 요거트와 상큼한 과일의 만남!!</p>
          </div>
        </li>
        <li className="app__menu__card" onMouseOver={cardActive}>
          <img src={images.menuIcecream} alt="menu-icecream" />
          <div className="card__label">
            <h3 className="card__label__name">ICE CREAM</h3>
            <p className="card__label__info">달콤함과 시원함으로 스트레스를 확!</p>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Menu;
