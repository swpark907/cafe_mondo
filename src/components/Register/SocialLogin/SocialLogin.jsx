import React from 'react';
import './SocialLogin.css'

const SocialLogin = () => {
  return (
    <div className="register__oAuth">
        <button className="oAuth_btn register__google">
          <div className="icon">a</div>
          구글로 회원가입
        </button>
        <button className="oAuth_btn register__naver">
          <div className="icon">a</div>
          카카오로 회원가입
        </button>
        <button className="oAuth_btn register__kakao">
          <div className="icon">a</div>
          네이버 아이디로 회원가입
        </button>
      </div>
  );
};

export default SocialLogin;