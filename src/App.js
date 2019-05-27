// W każdym pliku, w którym tworzymy komponent potrzebujemy zaimportować bibliotekę React
import React from 'react';

// Importujemy komponent Movie, który eksportujemy w pliku Movie.js
import Movie from './Movie'

// Ładujemy kolejne style
// Przy takim podejściu (a jest kilka) nie ma znaczenia gdzie zaimportujemy plik css
// Przyjęło się rozdzielać je i importować w komponentach, które stylują
import './App.css';

// Jeżeli chcemy użyć obrazka np. w <img src={obrazek} />
// to możemy zaimportować go w sposób
// import obrazek from './sciezka_do_obrazka.jpg'

class App extends React.Component {
  constructor(props) {
    super(props)

    // state jest zmienną, która jak sama nazwa wskazuje przechowuje stan komponentu
    // ustawianie nowych wartości odbywa się za pomocą metody this.setState(nowyState)
    // setState to jedyna prawidłowa metoda ustawiania nowego state, bo dzięki niej
    // jesteśmy pewni że nasz komponent się zaktualizuje i wyświetli zmienione dane
    this.state = {
      movies: [
        {
          id: 1,
          title: 'Aladyn',
          author: 'Guy Ritchie'
        },
        {
          id: 2,
          title: 'Pewnego razu w Hollywood',
          author: 'Quentin Tarantino'
        },
        {
          id: 3,
          title: 'John Wick 3',
          author: 'Chad Stahelski'
        }
      ]
    }
  }

  handleDelete = (id) => {
    // metoda setState przyjmuje jako argument nowy state i renderuje na nowo komponent
    // dzięki czemu zmiany są widoczne dla użytkownika na stronie
    this.setState(prevState => {
      return ({
        // funkcja filter zwraca przefiltrowaną tablicę według zadanego wzoru
        // w tym wypadku sprawdzamy czy element ma różne id od klikniętego
        movies: prevState.movies.filter((element) => element.id !== id)
      })
    })
  }

  render () {
    // Bajer JS-a pozwalający na destrukcję obiektu
    // https://developer.mozilla.org/pl/docs/Web/JavaScript/Referencje/Operatory/Destructuring_assignment
    // Przydatne jeżeli kilka razy używamy czegoś ze state lub props,
    // bo nie trzeba pisać za każdym razem this.state.movies
    const { movies } = this.state;

    return (
      // Puste klamry oznaczają <React.Fragment> i pozwalają na wrappowanie innych elementów bez wpływu na DOM
      // Potrzebne jest to ponieważ komponenty mogą zwracać tylko jeden element (zagnieżdżenia są ok)
      <>
        {/*
          Komponenty React używają JSX, który imituje HTML, dzięki temu możemy używać
          standardowych tagów HTML (np. h1) oraz innych komponentów (np. <Movie />)

          Co istotne pozwala to na dostęp do JavaScriptu w dowolnym momencie przy użyciu
          klamer {} (np. ten komentarz :D)
        */}
        <h1 className="title">prawie Filmweb</h1>

        {/*
          W celu wyświetlenia kilku komponentów z różnymi danymi możemy posłużyć się JSową funkcją map,
          która
        */}

        <ul className="movies">
          {
            movies.map((element) => {
              return (
                <Movie
                  // https://reactjs.org/docs/lists-and-keys.html#keys
                  key={element.id}
                  title={element.title}
                  author={element.author}
                  // arrow function wrappuje docelową metode this.handleDelete, dzięki czemu możemy
                  // przekazać argument w postaci id bez odpalania funkcji handleDelete przy każdym renderze
                  onDelete={() => this.handleDelete(element.id)}
                />
              )
            })
          }
        </ul>
      </>
    )
  }
}

export default App;


// alternatywy

// początkowy state bez konstruktora
// class App extends React.Component {
//    state = {
//        movies: [...]
//    }
//
//    render () {...}
// }

// Component zamiast React.Component jeżeli zaimportujemy
// to w ten sposób - import React, { Component } from 'react'
// class App extends Component {}
