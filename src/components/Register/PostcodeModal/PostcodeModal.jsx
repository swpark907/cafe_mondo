import React from "react";
import DaumPostcode from "react-daum-postcode";
import "./PostcodeModal.css";

const PostcodeModal = ({setAddressModalOpen, setAddressInfo, addressInfo}) => {
  const handleComplete = (data) => {
    console.log(data)
    let fullAddress = data.address;
    let extraAddress = "";
    let zoneCode = data.zonecode;

    if (data.addressType === "R") {
      if (data.bname !== "") {
        extraAddress += data.bname;
      }
      if (data.buildingName !== "") {
        extraAddress +=
          extraAddress !== "" ? `, ${data.buildingName}` : data.buildingName;
      }
      fullAddress += extraAddress !== "" ? ` (${extraAddress})` : "";
    }

    setAddressModalOpen(false)
    setAddressInfo({
      ...addressInfo,
      main: fullAddress,
      code: zoneCode,
    })
  };

  const modalClose = (e) => {
    if(e.target === e.currentTarget){
      setAddressModalOpen(false);
    }
    
  }



  return (
    <div className="register__modal__container" onClick={modalClose}>
      <h1>MODAL</h1>
      <div className="register__modal">
        <button className="register__modal__closeBtn" onClick={modalClose}>창닫기</button>
        <DaumPostcode
          onComplete={handleComplete}
          style={{width: '100%', height: '100%'}}
        />
      </div>
    </div>
  );
};

export default PostcodeModal;