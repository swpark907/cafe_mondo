import { useEffect, useRef, useState } from "react";
import "./Register.css";
import PostcodeModal from "./PostcodeModal";

const USER_REGEX = /^[a-z0-9-_]{6,14}$/;
const PW_REGEX = /^(?=.*[a-z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;

const Register = () => {
  const userRef = useRef();

  const [user, setUser] = useState("");
  const [validUser, setValidUser] = useState(false);
  
  const [pw, setPw] = useState("");
  const [validPw, setValidPw] = useState(false);
  
  const [matchPw, setMatchPw] = useState("");
  const [validMatch, setValidMatch] = useState(false);

  const [matchLabelMsg, setMatchLabelMsg] = useState("");

  const [addressInfo, setAddressInfo] = useState({
    main: null,
    code: null,
    sub: null,
  });
  const [addressModalOpen, setAddressModalOpen] = useState(false);

  useEffect(() => {
    userRef.current.focus();
  }, []);

  useEffect(() => {
    const result = USER_REGEX.test(user);
    setValidUser(result);
  }, [user]);

  useEffect(() => {
    const result = PW_REGEX.test(pw);
    setValidPw(result);
  }, [pw]);

  useEffect(() => {
    !validPw
      ? setMatchLabelMsg("먼저 비밀번호를 조건에 맞게 입력해주세요")
      : setMatchLabelMsg("비밀번호와 다릅니다.");
  }, [matchPw]);

  useEffect(() => {
    pw === matchPw && validPw ? setValidMatch(true) : setValidMatch(false);
  }, [pw, matchPw]);

  return (
    <div className="app__register flex__center app__wrapper">
      <h2>회원가입</h2>
      <form className="register__form">
        <div className="form__list register__form__id">
          <h3>아이디</h3>
          <div className="form__input">
            <input
              type="text"
              ref={userRef}
              required
              className="register__input__id"
              id="registerId"
              placeholder="영소문자 또는 숫자 6~14자로 입력"
              onChange={(e) => {
                setUser(e.target.value);
              }}
            />
            <label
              htmlFor="registerId"
              className={user && !validUser ? "invalid" : "valid"}
            >
              아이디가 올바르지 않습니다.
            </label>
          </div>
        </div>
        <div className="form__list register__form__pw">
          <h3>비밀번호</h3>
          <div className="form__input">
            <input
              type="password"
              required
              className="register__input__pw"
              id="registerPw"
              placeholder="영소문자, 숫자 조합으로 8~24자로 입력"
              onChange={(e) => {
                setPw(e.target.value);
              }}
            />
            <label
              htmlFor="registerPw"
              className={pw && !validPw ? "invalid" : "valid"}
            >
              비밀번호를 조건에 맞게 입력해 주세요.
            </label>
          </div>
        </div>
        <div className="form__list register__form__match">
          <h3>비밀번호 확인</h3>
          <div className="form__input">
            <input
              type="password"
              required
              className="register__input__match"
              id="registerMatch"
              placeholder="비밀번호를 다시 한번 입력해주세요"
              onChange={(e) => {
                setMatchPw(e.target.value);
              }}
            />
            <label
              htmlFor="registerMatch"
              className={matchPw && !validMatch ? "invalid" : "valid"}
            >
              {matchLabelMsg}
            </label>
          </div>
        </div>

        <div className="form__list register__address">
          <h3>주소</h3>
          <div className="register__search">
            <input
              type="text"
              className="address__code address__input"
              readOnly
              value={addressInfo.code? addressInfo.code : ''}
              placeholder="우편번호"
            />
            <button
              onClick={(e) => {
                e.preventDefault();
                setAddressModalOpen(true);
              }}
            >
              우편번호 찾기
            </button>
          </div>
          <input
            type="text"
            readOnly
            className="address__main address__input"
            value={addressInfo.main? addressInfo.main : ''}
            placeholder="기본주소"
          />
          <input
            type="text"
            className="address__sub address__input"
            placeholder="나머지 주소(선택입력 가능)"
            onChange={(event) => {
              setAddressInfo({
                ...addressInfo,
                sub: event.target.value,
              });
              console.log(addressInfo.sub);
            }}
          />
        </div>
        {addressModalOpen ? (
          <PostcodeModal
            addressInfo={addressInfo}
            setAddressInfo={setAddressInfo}
            setAddressModalOpen={setAddressModalOpen}
          />
        ) : null}

        <button
          className="form__submitBtn"
          disabled={!validUser || !validPw || !validMatch || !addressInfo.main || !addressInfo.code ? true : false}
        >
          회원가입
        </button>
      </form>
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
    </div>
  );
};

export default Register;
