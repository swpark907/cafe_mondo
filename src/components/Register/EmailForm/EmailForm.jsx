import React, { useEffect, useRef, useState } from "react";
import { EMAIL_REGEX } from "../../../constants/index";

const EmailForm = ({ setEmail, setValidEmail, validEmail }) => {
  const [directInput, setDirectInput] = useState(false);
  const [emailId, setEmailId] = useState('');
  const [emailAddress, setEmailAddress] = useState('');

  const directInputRef = useRef();

  const handleOnchange = (e) => {
    if(e.target.value === '직접입력'){
      setEmailAddress('');
      setDirectInput(true);
    } else {
      setDirectInput(false)
      if(e.target.value === 'default'){
        return;
      }
      setEmailAddress(e.target.value);
    }
  }

  const handleEmail = (e) => {
    if(directInput){
      setEmailAddress(e.target.value)
    }
  }

  useEffect(() => {
    directInputRef.current.value = '';
  }, [directInput]);

  useEffect(() => {
    let email = emailId.concat('@', emailAddress);
    const result = EMAIL_REGEX.test(email);
    if(result){
      setEmail(email);
      setValidEmail(true);
    } else {
      setValidEmail(false);
    }
    
  },[emailId, emailAddress])

  return (
    <div className="form__list">
      <h3>이메일</h3>
      <div className="form__input form__flex">
        <input
          type="email"
          placeholder="이메일을 입력해주세요"
          onChange={(e) => {
            setEmailId(e.target.value);
          }}
        />
        &nbsp;@&nbsp;
        <select name="" id="rest-address" onChange={handleOnchange}>
          <option value="default" >선택하세요</option>
          <option value="naver.com" >naver.com</option>
          <option value="gmail.com">gmail.com</option>
          <option value="hanmail.net">hanmail.net</option>
          <option value="직접입력">직접입력</option>
        </select>
        <input type="text" id="direct-input" disabled={!directInput ? true : false} ref={directInputRef} onChange={handleEmail}/>
      </div>
      <label
          htmlFor="direct-input"
          className={emailAddress && !validEmail ? "invalid" : "valid"}
        >
          올바른 이메일 형식이 아닙니다.
        </label>
    </div>
  );
};

export default EmailForm;
