import { useState } from "react";
import { Link } from "react-router-dom";
import "./Login.css";
import SocialButton from "../../components/common/SocialButton/SocialButton";

const Login = () => {
  const [userId, setUserId] = useState("");
  const [userPw, setUserPw] = useState("");

  const socialList = ["google", "kakao", "naver"];

  return (
    <div className="app__login flex__center section_padding">
      <h2>로그인</h2>
      <form className="login__form">
        <div className="id-pw-wrap">
          <input type="text" placeholder="아이디" />
          <input type="text" placeholder="비밀번호" />
          <button>로그인</button>
        </div>
      </form>
      <span>아직 아이디가 없어신가요? <Link to="/register">회원가입</Link></span> 

      {socialList.map(social => 
      <SocialButton platform={social} mode="login" />
      )}
    </div>
  );
};

export default Login;
