import React from 'react';
import {Header, About, Menu, Magazine, Contact} from '../../components/index';
import './Home.css'

const Home = () => {
  return (
    <>
      <Header />
      <About />
      <Menu />
      <Magazine />
      <Contact />
    </>
  );
};

export default Home;