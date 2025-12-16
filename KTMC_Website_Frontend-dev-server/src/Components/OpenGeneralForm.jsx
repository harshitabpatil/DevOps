import React from "react";

const OpenGeneralForm = ({ onOpen }) => {
  return (
    
    <div className="bannercta d-flex btn-black-cover">
      <div className="blackcover"></div>
      <button onClick={onOpen} className="banner-cta btn liquid m-0">
        Donate Now
      </button>
    </div>
  );
};

export default OpenGeneralForm;
