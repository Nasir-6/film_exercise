import React from "react";

const Buttons = ({ handleNextButtonClick, handlePreviousButtonClick, handleSubmitButton, maxFilmIndex }) => {
  return (
    <>
      <button onClick={handleNextButtonClick}>Next</button>
      <button onClick={handlePreviousButtonClick}>Previous</button>
      <form onSubmit={handleSubmitButton}>
          <label htmlFor="film-selector">Select a film:</label>
          <br />
          <input type="number" name="film-selector" id="film-selector" min="1" max={maxFilmIndex} />
          <input type="submit" value="Submit" />
      </form>
    </>
  );
};

export default Buttons;
