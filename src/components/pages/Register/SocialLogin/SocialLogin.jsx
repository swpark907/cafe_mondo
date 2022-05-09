import React from "react";
import "./SocialLogin.css";
import SocialButton from "../../../common/SocialButton/SocialButton";

const SocialLogin = () => {
  return (
    <div className="register__oAuth">
      <SocialButton platform="google" mode="register" />
      <SocialButton platform="kakao" mode="register" />
      <SocialButton platform="naver" mode="register" />
    </div>
  );
};

export default SocialLogin;
