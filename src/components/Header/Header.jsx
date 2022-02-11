import React from 'react';
import './Header.css';
import {images} from '../../constants'
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className="app__header app__wrapper section_padding" id="home">
      <img src={images.header1} alt="" />
      <div className="app__header_img">
      </div>
      <div className="app__header_info">
        <p className="app__header-p">커피로 세상에 향기를 채우다</p>
        <h1 className="app__header-h1">CAFFEMONDO</h1>
        <p className="app__header-p-sub">CAFFEMONDO Coffee & Brunch</p>
        <button type="button" className="app__header-button"><Link to='/about'>빠져보기</Link></button>
      </div>
    </div>
  );
};

export default Header;