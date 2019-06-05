import React, { Component } from 'react'

import { Link } from 'react-router-dom'

class Details extends Component {
  // Inicjujemy podstawowy state, który będziemy updatować
  state = {
    data: {}, // dane które pobierzemy (z racji tego, że pobrane dane będą obiektem to inicjuje jako pusty obiekt)
    isLoading: false, // spoko rzecz żeby wiedzieć, że pobieranie się rozpoczęło
    error: null // jeżeli chcemy wyświetlać informacje o błędach
  }

  // Jest to funkcja, która wywołuje się raz po załadowaniu komponentu
  componentDidMount () {
    // Dzięki temu, że Details jest renderowane przez Route z react routera
    // dostaje od react routera dodatkowe propsy history, location i match
    // w match możemy np. otrzymać ID z adresu /movie/:movieId np. /movie/a6b79 to { movieId: a6b79 }
    const { match } = this.props;

    this.setState({ isLoading: true }); // Zaraz zaczniemy pobierać dane, więc możemy ustawić isLoading na true

    fetch(`https://api.themoviedb.org/3/movie/${match.params.id}?api_key=612ebf63e580831559365d1bc93af503`)
      .then(response => response.json())
      .then(data => this.setState({ data: data, isLoading: false })) // Dane udało się pobrać, wrzucamy je do state i ustawiamy isLoading na false
      .catch(err => this.setState({ error: err.message, isLoading: false })) // Wystąpił jakiś błąd więc dodajemy do state jego treść żeby wyświetlić użytkownikom i ustaiwamy isLoading na false
  }

  render() {
    const { data, isLoading, error } = this.state;

    if (isLoading) {
      // jeżeli dane są pobierane wyświetlmy informacje
      return <p>Ładowanie danych...</p>
    }

    if (error) {
      // jeżeli napotkamy jakiś błąd wyświetlimi jego zawartość
      return <p>{error}</p>
    }

    // w każdym innym przypadku wyświeltamy nasze detale
    return (
      <div className="details">
        <div className="details-header" style={{
          backgroundImage: `url(https://image.tmdb.org/t/p/original${data.poster_path})`
        }}>
          <div className="container">
            <h1>{data.title}</h1>
            <p>{data.release_date}</p>
            <p className="details-rating">Ocena: <span>{data.vote_average}</span></p>
          </div>
        </div>
        <div className="container">
          <h2>Opis</h2>
          <p>{data.overview}</p>
        </div>

        <Link to="/" className="back-btn">Powrót do listy filmów</Link>
      </div>
    )
  }
}

export default Details
