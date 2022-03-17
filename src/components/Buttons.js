import React from "react";

const Buttons = ({ handleNextButtonClick, handlePreviousButtonClick }) => {
  return (
    <>
      <button onClick={handleNextButtonClick}>Next</button>
      <button onClick={handlePreviousButtonClick}>Previous</button>
    </>
  );
};

export default Buttons;
