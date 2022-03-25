import React from "react";

const UserForm = ({userRef, user, validUser, setUser}) => {
  return (
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
  );
};

export default UserForm;
