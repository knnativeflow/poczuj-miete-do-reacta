// Ten komponent to wydzielone wyświetlanie listy do osobnego komponenty z App
// Dzięki temu możemy zachować czytelność aplikacji, a każdy widok renderowany przez react router to osobny komponent

import React, { Component } from 'react';

import Movie from './Movie'
import './App.css';

class List extends Component {
  state = {
    movies: [], // Tutaj będziemy trzymać tablicę z filmami, którą pobierzemy
    isLoading: false, // Dzięki temu będziemy mogli wyświetlać informacje, że dane są pobierane
    error: null // W razie błędów będziemy mogli łatwo poinformować użytkownika
  }

  componentDidMount () {
    // wytłumaczone w komponencie Details
    this.setState({ isLoading: true, error: null })
    fetch('https://api.themoviedb.org/3/movie/popular?api_key=612ebf63e580831559365d1bc93af503')
      .then(response => response.json())
      .then(data => this.setState({ movies: data.results, isLoading: false }))
      .catch(err => this.setState({ error: err.message, isLoading: false }))
  }

  handleDelete = (id) => {
    this.setState(prevState => {
      return ({
        movies: prevState.movies.filter((element) => element.id !== id)
      })
    })
  }

  render () {
    const { movies, isLoading } = this.state;

    // Wytłumaczone w details
    if (isLoading) {
      return <p>Ładowanko filmików :) ...</p>
    }

    return (
      <>
        <h1 className="title">prawie Filmweb</h1>
        <ul className="movies">
          {
            movies.map((item) => {
              return (
                <Movie
                  key={item.id}
                  id={item.id}
                  title={item.title}
                  vote={item.vote_average}
                  date={item.release_date}
                  onDelete={this.handleDelete}
                />
              )
            })
          }
        </ul>
      </>
    )
  }
}

export default List;
