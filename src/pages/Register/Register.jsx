import { useEffect, useState } from "react";
import "./Register.css";
import PostcodeModal from "../../components/Register/PostcodeModal/PostcodeModal";
import {AddressForm, EmailForm, PhoneForm,MatchPwForm,PwForm,UserForm,SocialLogin} from '../../components/index'

const USER_REGEX = /^[a-z0-9-_]{6,14}$/;
const PW_REGEX = /^(?=.*[a-z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;

const Register = () => {
  const [success, setSuccess] = useState(false);

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

  const [phoneNumber, setPhoneNumber] = useState("");

  const [email, setEmail] = useState("");
  const [validEmail, setValidEmail] = useState(false);

  const [userData, setUserData] = useState({});

  const handleRegister = () => {
    // 이 함수 대신 서버 전송 함수를 넣는다
    setUserData({
      user,
      pw,
      addressInfo,
      phoneNumber,
      email,
    });
    setSuccess(true);
  };

  useEffect(() => {
    console.log(userData);
  }, [userData]);

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
    <div className="app__register flex__center app__wrapper section_padding">
      {success ? (
        <>
          <h1>회원가입을 축하합니다!</h1>
          <button>로그인하기</button>
        </>
      ) : (
        <>
          <h2>회원가입</h2>
          <form className="register__form">
            <UserForm user={user} validUser={validUser} setUser={setUser} />
            <PwForm setPw={setPw} pw={pw} validPw={validPw} />
            <MatchPwForm
              setMatchPw={setMatchPw}
              matchPw={matchPw}
              validMatch={validMatch}
              matchLabelMsg={matchLabelMsg}
            />

            <AddressForm
              addressInfo={addressInfo}
              setAddressInfo={setAddressInfo}
              addressModalOpen={addressModalOpen}
              setAddressModalOpen={setAddressModalOpen}
            />

            <PhoneForm setPhoneNumber={setPhoneNumber} />

            <EmailForm
              setEmail={setEmail}
              setValidEmail={setValidEmail}
              validEmail={validEmail}
            />

            <button
              className="form__submitBtn"
              disabled={
                !validUser ||
                !validPw ||
                !validMatch ||
                !addressInfo.main ||
                !addressInfo.code ||
                !validEmail
                  ? true
                  : false
              }
              onClick={() => {
                handleRegister();
                // 서버 전송 함수
              }}
            >
              회원가입
            </button>
          </form>
          <SocialLogin></SocialLogin>
        </>
      )}
    </div>
  );
};

export default Register;
