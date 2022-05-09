import React from "react";
import "./SocialLogin.css";
import SocialButton from "../../../common/SocialButton/SocialButton";

const SocialLogin = () => {

  const socialList = ['google', 'kakao', 'naver'];

  return (
    <div className="register__oAuth">
      {socialList.map(social => 
        <SocialButton platform={social} mode="register" />
      )}
    </div>
  );
};

export default SocialLogin;
