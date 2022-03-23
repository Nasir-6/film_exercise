import React from 'react'

const Film = ({ film }) => {

    // Map through and return cast
    const allCast = film.cast.map((oneCast, index) => {
        return(
            <li key={index}>{oneCast.name}</li>
        )
    })
  return (
    <div className="film-container">
      <h2>{film.title}</h2>
      <h3>Film Duration: {film.duration} mins</h3>
      <h3>Film Rating: {film.rating}</h3>
      <h3>Cast List:</h3>
      {/* <ul>{film.cast[0].name}</ul> */}
      <ul>{allCast}</ul>
      <h3>Director: {film.director.name}</h3>
    </div>
  );
};

export default Film;