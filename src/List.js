import React, { Component } from 'react';

import { request } from './request';
import Movie from './Movie'

class List extends Component {
  state = {
    movies: [],
    isLoading: false,
    error: null
  }

  componentDidMount () {
    this.setState({ isLoading: true, error: null })
    request('movie/popular')
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

    return (
      <div className="container">
        <h2 className="title">Najpopularniejsze</h2>
        {isLoading
            ? (
            <p>Ładowanko filmików :) ...</p>
          ) : (
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
        )}
      </div>
    )
  }
}

export default List;
