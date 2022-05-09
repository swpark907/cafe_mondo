import React, { useEffect, useState } from "react";
import './SocialButton.css'

const SocialButton = ({ platform, mode }) => {
  const [platformMessage, setPlatformMessage] = useState("");
  const [classByPlatform, setClassByPlatform] = useState("");
  const [buttonMode, setButtonMode] = useState(""); // 로그인, 회원가입

  const platformSelector = (platform) => {
    switch (platform) {
      case "google":
        setPlatformMessage("구글로");
        setClassByPlatform("google");
        break;
      case "naver":
        setPlatformMessage("네이버로");
        setClassByPlatform("naver");
        break;
      case "kakao":
        setPlatformMessage("카카오로");
        setClassByPlatform("kakao");
        break;
      default:
        throw new Error("맞는 플랫폼이 없습니다.");
    }
  };

  const modeSelector = (mode) => {
    switch (mode) {
      case 'login':
        setButtonMode("로그인");
        break;
      case 'register':
        setButtonMode("회원가입");
        break;
    }
  };

  useEffect(() => {
    platformSelector(platform);
    modeSelector(mode);
  }, []);

  return (
    <>
      <button className={"oAuth_btn register__" + { classByPlatform }}>
        <div className="icon">a</div>
        {platformMessage} {buttonMode}
      </button>
    </>
  );
};

export default SocialButton;
