import React from 'react'

const Buttons = ({handleNextButtonClick}) => {
  return (
      <>
      <button onClick={handleNextButtonClick}>Next</button>
    <button onClick={handleNextButtonClick}>Previous</button>
      </>
    
  )
}

export default Buttons;