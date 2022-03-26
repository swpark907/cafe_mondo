import React from "react";

const EmailForm = ({ setEmail }) => {
  return (
    <div className="form__list">
      <h3>이메일</h3>
      <div className="form__input form__email">
        <input
          type="email"
          placeholder="이메일을 입력해주세요"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        &nbsp;@&nbsp;
        <select name="" id="rest-address">
          <option value="naver.com">naver.com</option>
          <option value="gmail.com">gmail.com</option>
          <option value="hanmail.net">hanmail.net</option>
          <option value="직접입력">직접입력</option>
        </select>
        <input type="text" id="direct-input"/>
      </div>
    </div>
  );
};

export default EmailForm;
