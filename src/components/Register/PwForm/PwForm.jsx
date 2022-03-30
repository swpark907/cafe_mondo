import React from "react";

const PwForm = ({setPw, pw, validPw}) => {
  return (
    <div className="form__list register__form__pw">
      <h3>비밀번호</h3>
      <div className="form__input">
        <input
          type="password"
          required
          className="register__input__pw"
          id="registerPw"
          placeholder="영소문자, 숫자 조합으로 8~24자로 입력"
          autoComplete="off"
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
  );
};

export default PwForm;
