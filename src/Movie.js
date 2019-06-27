import React from 'react'
import { Link } from 'react-router-dom'

const Movie = ({
  id,
  title,
  date,
  vote,
  onDelete
}) => {
  return (
    <li className="movie-item">
      <Link to={`/movie/${id}`}><h3>{title}</h3></Link>
      <p>Data: {date}</p>
      <p>Ocena: {vote}</p>

      {/*
        * Taka konstrukcja pozwala nam na renderowanie warunkowe czyli
        * wyświetl button tylko wtedy gdy onDelete istnieje
        */}
      {onDelete && <button className="movie-btn" onClick={() => onDelete(id)}>Usuń</button>}
    </li>
  )
}

export default Movie
