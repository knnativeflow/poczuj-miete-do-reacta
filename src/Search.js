import React, { Component } from 'react';

import Movie from './Movie'
import { request } from './request';

class Search extends Component {
  state = {
      movies: [],
      isLoading: false,
      error: null
  }

  // Funkcja dzięki której możemy zapobiec zbyt częstemu wywoływaniu się innej funkcji
  // działa ona tak, że ustawia timer (setTimeout) po jakim czasie ma zostać wywołana wybrana funkcja
  // jeżeli przed upływem czasu ten debounce zostanie wywołany znowu to timer zostanie zresetowany i
  // będzie liczyć czas od nowa, a funkcja wywoła się dopiero jak nie będzie przez ten czas innych wywołań
  // w praktyce chodzi o to, że jeżeli piszemy w wyszukiwarce jakąś fraze i będziemy pobierać wyniki
  // przy okazji każdej wpisanej litery to spowoduje to dużo zapytań co jest niepotrzebne np. jeżeli ktoś
  // wie jaką dłuższą fraze chce wpisać to nie każda litera spowoduje zapytanie, a chwila w której przestanie pisać (tutaj 500 ms)
  debounce = (func, time) => {
    clearTimeout(this.time)
    this.time = setTimeout(func, time)
  }

  fetchSearch = (searchValue) => {
    this.setState({ isLoading: true, error: null })
    request('search/movie', `query=${searchValue}`)
      .then(data => this.setState({ movies: data.results || [], isLoading: false }))
      .catch(err => this.setState({ error: err.message, isLoading: false }))
  }

  handleChange = (event) => {
    const value = event.target.value;
    this.debounce(
      () => this.fetchSearch(value),
      500
    )
  }

  render () {
    const { movies, isLoading } = this.state;

    return (
      <div className="container">
        <h2 className="title">Wyszukaj</h2>
        <input className="search-input" onChange={this.handleChange} placeholder="Nazwa filmu" />

        {isLoading && <p>Wyszukuje...</p>}
        {!isLoading && movies.length === 0
          ? <p>Brak wyników.</p>
          : (
            <ul className="movies">
              {movies.map((item) =>
                <Movie
                  key={item.id}
                  id={item.id}
                  title={item.title}
                  vote={item.vote_average}
                  date={item.release_date}
                />
              )}
            </ul>
        )}
      </div>
    )
  }
}

export default Search;
