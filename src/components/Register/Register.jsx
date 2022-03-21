import { useEffect, useRef, useState } from "react";
import "./Register.css";

const ID_REGEX = "";
const PW_REGEX = "";

const Register = () => {
  const idRef = useRef();

  const [id, setId] = useState("");
  const [validId, setValidId] = useState(false);
  const [idFocus, setIdFocus] = useState(false);

  const [pw, setPw] = useState("");
  const [validPw, setValidPw] = useState(false);
  const [pwFocus, setPwFocus] = useState(false);

  const [matchPw, setMatchPw] = useState("");
  const [validMatch, setValidMatch] = useState(false);
  const [matchFocus, setMatchFocus] = useState(false);

  useEffect(() => {
    idRef.current.focus();
  }, []);

  return (
    <div className="app__register flex__center app__wrapper">
      <h2>회원가입</h2>
      <form className="register__form">
        <div className="form__list register__form__id">
          <h3>아이디</h3>
          <div className="form__input">
            <input
              type="text"
              ref={idRef}
              required
              className="register__input__id"
              id="registerId"
              placeholder="영소문자 또는 숫자 6~14자로 입력"
            />
            <label htmlFor="registerId"></label>
          </div>
        </div>
        <div className="form__list register__form__pw">
          <h3>비밀번호</h3>
          <div className="form__input">
            <input
              type="text"
              required
              className="register__input__pw"
              id="registerPw"
              placeholder="영소문자, 숫자 조합으로 8~24자로 입력"
            />
            <label htmlFor="registerPw"></label>
          </div>
        </div>
        <div className="form__list register__form__match">
          <h3>비밀번호 확인</h3>
          <div className="form__input">
            <input
              type="text"
              required
              className="register__input__match"
              id="registerMatch"
              placeholder="비밀번호를 다시 한번 입력해주세요"
            />
            <label htmlFor="registerMatch"></label>
          </div>
        </div>
      </form>
      <div className="register__oAuth">
        <button className="oAuth_btn register__google">구글로 회원가입</button>
        <button className="oAuth_btn register__naver">카카오로 회원가입</button>
        <button className="oAuth_btn register__kakao">
          네이버 아이디로 회원가입
        </button>
      </div>
    </div>
  );
};

export default Register;
