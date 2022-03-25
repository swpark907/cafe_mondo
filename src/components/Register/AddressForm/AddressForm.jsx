import React from "react";
import PostcodeModal from "../PostcodeModal/PostcodeModal";
import './AddressForm.css'

const AddressForm = ({addressInfo, setAddressInfo, addressModalOpen, setAddressModalOpen}) => {
  return (
    <div className="form__list register__address">
      <h3>주소</h3>
      <div className="register__search">
        <input
          type="text"
          className="address__code address__input"
          readOnly
          value={addressInfo.code ? addressInfo.code : ""}
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
        value={addressInfo.main ? addressInfo.main : ""}
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
        }}
      />
      {addressModalOpen ? (
          <PostcodeModal
            addressInfo={addressInfo}
            setAddressInfo={setAddressInfo}
            setAddressModalOpen={setAddressModalOpen}
          />
        ) : null}
    </div>
  );
};

export default AddressForm;
