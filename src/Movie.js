import React from 'react'

// komponent funkcyjny Movie
// funkcja przyjmuje jako argument obiekt z propasmi, który możemy od razu zdekonstruktować
// inaczej wyglądało by to np. const Movie = (props) => ... props.title ...
const Movie = ({
  title,
  author,
  onDelete
}) => {
  return (
    <li className="movie-item">
      <h2>{title}</h2>
      <p>Reżyser: {author}</p>
      <button className="movie-btn" onClick={onDelete}>Usuń</button>
    </li>
  )
}

// export wskazuje na element, który będzie można zaimportować później z tego pliku
// `export default Movie` pozwala później na import w sposób - `import NieWaznaNazwa from './Movie'`
// `export Movie` potrzebuje importowania w sposób `import { Movie } from './Movie'`
// Może być wiele exportów i jeden export default
export default Movie


// Alternatywa w postaci komponentu klasowego

// class Movie extends React.Component {
//   render() {
//     const { title, author, onDelete } = this.props

//     return (
//       <li className="movie-item">
//         <h2>{title}</h2>
//         <p>Reżyser: {author}</p>
//         <button className="movie-btn" onClick={onDelete}>Usuń</button>
//       </li>
//     )
//   }
// }

// export default Movie
