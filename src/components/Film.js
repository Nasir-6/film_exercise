import React from 'react'

const Film = ({ film }) => {
  return (
    <div className="film-container">
      <h2>{film.title}</h2>
      <h3>{film.duration}</h3>
      <h3>{film.rating}</h3>
      <h3>{film.cast[0].name}</h3>
      <h3>{film.director.name}</h3>
    </div>
  );
};

export default Film;