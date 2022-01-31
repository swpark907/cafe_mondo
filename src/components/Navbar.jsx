import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {

  const [navActive, setNavActive] = useState(false);

  return (
    <div className='flex justify-between px-8 py-4'>
      <div className='flex items-center'>
        <img className="" src="" alt="logo" />
        CafeMondo
      </div>
      <ul className='flex text-lg'>
        <li className='px-4 py-2'><Link to="/about">카페몬도</Link></li>
        <li className='px-4 py-2'><Link to="/">매거진</Link></li>
        <li className='px-4 py-2'><Link to="/">사진첩</Link></li>
        <li className='px-4 py-2'><Link to="/">오시는 길</Link></li>
      </ul>
      <div className='flex items-center'>
        <Link to="/login">로그인</Link>
      </div>
    </div>
  );
};

export default Navbar;