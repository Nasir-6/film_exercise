// import React from "react";

const Buttons = ({
  handleNextButtonClick,
  handlePreviousButtonClick,
  handleSubmitButton,
  maxFilmIndex,
}) => {
  return (
    <>
      <div className="button-container">
        <button onClick={handlePreviousButtonClick}>Previous</button>
        <button onClick={handleNextButtonClick}>Next</button>
      </div>

      <form onSubmit={handleSubmitButton}>
        <label htmlFor="film-selector">Select a film:</label>
        <br />
        <input
          type="number"
          name="film-selector"
          id="film-selector"
          min="1"
          max={maxFilmIndex}
        />
        <input type="submit" value="Submit" />
      </form>
    </>
  );
};

export default Buttons;
