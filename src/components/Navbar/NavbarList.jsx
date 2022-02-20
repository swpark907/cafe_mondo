import React from "react";
import {Link} from 'react-router-dom'

const NavbarList = ({main}) => {
  return (
    <li className="app__navbar-link">
      <Link to={`/${main.slug}`}>
        <span className="app__navbar-link__main">{main.name}</span>
      </Link>
      <ul className="app__navbar-link__sub">
        { 
          main.list.map((list, index) => 
            <Link to={`/${main.slug}/${list.slug}`} key={index}>
              <li>{list.name}</li>
            </Link>
          )
        }
      </ul>
    </li>
  );
};

export default NavbarList;
