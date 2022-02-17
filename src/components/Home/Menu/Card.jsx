import React from "react";
import { Link } from "react-router-dom";

const Card = ({ card, cardActive }) => {
  return (
    <li className="app__menu__card" onMouseOver={cardActive}>
      <Link to={`/menu/${card.slug}`}>
        <img src={card.imgSrc} alt="menu-coffee" />
        <div className="card__label">
          <h3 className="card__label__name">{card.name}</h3>
          <p className="card__label__info">{card.info}</p>
        </div>
      </Link>
    </li>
  );
};

export default Card;
