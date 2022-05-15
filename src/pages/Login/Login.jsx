import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Login.css";
import { SocialButton, Button } from "../../components/index";

const Login = ({ isLogin, setIsLogin }) => {
  const [userId, setUserId] = useState("");
  const [userPw, setUserPw] = useState("");
  const [validationMsg, setValidationMsg] = useState("로그인 유효성 검사");

  const userCheck = (userId, userPw) => {
    // 서버로 보내서 아이디, 비밀번호 확인하는 작업
    return true;
  };

  const submitHandler = (e) => {
    e.preventDefault();
    userCheck(userId, userPw) ? setIsLogin(true) : setIsLogin(false);
  };

  useEffect(() => {
    console.log(isLogin);
  }, [isLogin]);

  const socialList = ["google", "kakao", "naver"];

  return (
    <div className="app__login flex__center section_padding">
      <h2>로그인</h2>
      <form className="login__form">
        <div className="id-pw-wrap">
          <input
            type="text"
            placeholder="아이디"
            id="userId"
            onChange={(e) => {
              setUserId(e.target.value);
            }}
          />
          <input
            type="password"
            placeholder="비밀번호"
            id="userPw"
            onChange={(e) => {
              setUserPw(e.target.value);
            }}
          />
          <p className="validation-message">{validationMsg}</p>
          <Button onClick={submitHandler}>로그인</Button>
        </div>
      </form>
      <span>
        아직 아이디가 없어신가요? <Link to="/register">회원가입</Link>
      </span>

      {socialList.map((social) => (
        <SocialButton platform={social} mode="login" />
      ))}
    </div>
  );
};

export default Login;
