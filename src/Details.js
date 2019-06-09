import React, { Component } from 'react'

import { Link } from 'react-router-dom'

class Details extends Component {
  state = {
    data: {},
    isLoading: false,
    error: null
  }

  componentDidMount () {
    const { match } = this.props;

    this.setState({ isLoading: true });

    fetch(`https://api.themoviedb.org/3/movie/${match.params.id}?api_key=612ebf63e580831559365d1bc93af503`)
      .then(response => response.json())
      .then(data => this.setState({ data: data, isLoading: false }))
      .catch(err => this.setState({ error: err.message, isLoading: false }))
  }

  render() {
    const { data, isLoading, error } = this.state;

    if (isLoading) {
      return <p>Ładowanie danych...</p>
    }

    if (error) {
      return <p>{error}</p>
    }

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
