import React from "react";
import { useState, useEffect } from 'react';

const Phone = ({ setPhoneNumber }) => {
  const [phone1, setPhone1] = useState("");
  const [phone2, setPhone2] = useState("");
  const [phone3, setPhone3] = useState("");

  const phoneHnadler = () => {
    let fitNumber = `${phone1}${phone2}${phone3}`
    setPhoneNumber(fitNumber);
  };

  useEffect(() => {
    phoneHnadler();
  }, [phone1, phone2, phone3]);

  return (
    <div className="form__list">
      <h3>연락처</h3>
      <div className="form__input form__phone">
        <input
          className="phone__input"
          id="phone1"
          type="text"
          maxLength={4}
          onChange={(e) => {
            setPhone1(e.target.value)
          }}
        />
        &nbsp;-&nbsp;
        <input
          className="phone__input"
          id="phone2"
          type="text"
          maxLength={4}
          onChange={(e) => {
            setPhone2(e.target.value)
          }}
        />
        &nbsp;-&nbsp;
        <input
          className="phone__input"
          id="phone3"
          type="text"
          maxLength={4}
          onChange={(e) => {
            setPhone3(e.target.value)
          }}
        />
      </div>
    </div>
  );
};

export default Phone;
