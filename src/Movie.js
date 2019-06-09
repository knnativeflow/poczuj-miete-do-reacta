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
      <Link to={`/movie/${id}`}><h2>{title}</h2></Link>
      <p>Data: {date}</p>
      <p>Ocena: {vote}</p>
      <button className="movie-btn" onClick={() => onDelete(id)}>Usuń</button>
    </li>
  )
}

export default Movie
