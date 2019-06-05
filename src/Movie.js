import React from 'react'

// Link z biblioteki React Router pozwala na linkowanie do innych "podstron", które jest handlowane przez
// React Router czyli javascript a nie przez przeglądarkę co zapobiega m.in. przeładowywaniu strony
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
      {/* Link działa jak `a`, ale zamiast `href` podajemy `to` */}
      <Link to={`/movie/${id}`}><h2>{title}</h2></Link>
      <p>Data: {date}</p>
      <p>Ocena: {vote}</p>
      <button className="movie-btn" onClick={() => onDelete(id)}>Usuń</button>
    </li>
  )
}

export default Movie
