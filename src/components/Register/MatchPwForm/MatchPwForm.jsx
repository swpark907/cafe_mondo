import React from "react";

const MatchPwForm = ({setMatchPw, matchPw, validMatch, matchLabelMsg}) => {
  return (
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
  );
};

export default MatchPwForm;
