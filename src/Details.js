import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import { request } from './request'

class Details extends Component {
  state = {
    data: {},
    isLoading: false,
    error: null
  }

  componentDidMount () {
    const { match } = this.props;

    this.setState({ isLoading: true });

    request(`movie/${match.params.id}`)
      .then(data => this.setState({ data: data, isLoading: false }))
      .catch(err => this.setState({ error: err.message, isLoading: false }))
  }

  render() {
    const { data, isLoading, error } = this.state;

    if (error) {
      return <p>{error}</p>
    }

    return (
      <div className="details">
        <div className="details-header" style={{
          backgroundImage: !isLoading && `url(https://image.tmdb.org/t/p/original${data.poster_path})`
        }}>
          <div className="container">
            <h1>{data.title}</h1>
            <p>{data.release_date}</p>
            <p className="details-rating">Ocena: <span>{data.vote_average}</span></p>
          </div>
        </div>
        <div className="container">
          <h2>Opis</h2>
          <p>{data.overview || 'Ładowanie...'}</p>
        </div>

        <Link to="/" className="back-btn">Powrót do listy filmów</Link>
      </div>
    )
  }
}

export default Details
