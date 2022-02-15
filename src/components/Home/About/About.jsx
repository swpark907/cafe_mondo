import React, {useState, useEffect } from 'react';
import './About.css'
import images from '../../../constants/images';

const About = () => {

  const [contentOn, setContentOn] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", animationOn)
    return () =>{
      window.removeEventListener("scroll", animationOn);
    }
  },[contentOn])

  function animationOn () { 
    const content = document.querySelector('.app__about');
    const contentTop = content.getBoundingClientRect().top;
    const contentBottom = content.getBoundingClientRect().bottom;
    console.log({contentTop}, {contentBottom})
    console.log(window.innerHeight);
    console.log('스크롤중')
    if(window.innerHeight > contentTop + 500){
      setContentOn(true);
    } else{ setContentOn(false)}
    if(contentBottom < 500) {
      setContentOn(false);
    }
  }



  return (
    <div className="app__about app__wrapper flex__center">
        <div className={"app__about__content content-left" + (!contentOn ? "" : " on")}>
          <h1 className="headtext">MEMORY</h1>
          <p className="p__noto">추억을 나누는 곳,여유를 즐기는 곳<br />따뜻한 정성이 느껴지는 곳</p>
          <p className="p__noto">여러분의 소중한 기억이<br /> 되어드리겠습니다.</p>
        </div>
        
        <div className="app__about__latte">
          <img src={images.about1} alt="strawberry-latte" />
        </div>
        <div className={"app__about__content content-right" + (!contentOn ? "" : " on")}>
          <div className="p__noto text__end">Lorem ipsum dolor sit.</div>
          <div className="p__noto text__end">Lorem ipsum dolor sit amet.</div>
          <div className="headtext text__end">MONDO</div>
        </div>
    </div>
  );
};

export default About;