import { useEffect, useRef, useState } from "react";
import "./Register.css";
import PostcodeModal from "./PostcodeModal/PostcodeModal";
import SocialLogin from "./SocialLogin/SocialLogin";
import UserForm from "./UserForm/UserForm";
import PwForm from "./PwForm/PwForm";
import MatchPwForm from "./MatchPwForm/MatchPwForm";
import AddressForm from "./AddressForm/AddressForm";

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
        <UserForm
          userRef={userRef}
          user={user}
          validUser={validUser}
          setUser={setUser}
        />
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

        <button
          className="form__submitBtn"
          disabled={
            !validUser ||
            !validPw ||
            !validMatch ||
            !addressInfo.main ||
            !addressInfo.code
              ? true
              : false
          }
        >
          회원가입
        </button>
      </form>
      <SocialLogin></SocialLogin>
    </div>
  );
};

export default Register;
