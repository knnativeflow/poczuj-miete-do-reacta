import React, { Component } from 'react'

// Podstawowa obsługa formularzy
export default class Login extends Component {
  // Jeżeli chcemy mieć inputy kontrolowane (tzn. że wartość, która pojawia się w inpucie
  // jest wartością ze state) wtedy należy zainicjować state (daje to plus taki, że możemy mieć
  // wprowadzone jakieś domyślne wartości do naszych pól)
  state = {
    name: '',
    surname: ''
  }

  handleSubmit = (event) => {
    // Dzięki funkcji preventDefault() blokujemy domyślne zachowanie przeglądarki
    // w tym przypadku wysłanie formularza (nie chcemy robić tego standardowo z przeładowaniem strony,
    // a użyć do tego celu zapytania javascript (tutaj bez zapytania tylko console.log))
    event.preventDefault()
    console.log(this.state)
  }

  handleChange = (event) => {
    // Nie musimy dodawać osobnych funkcji set state dla każdego pola jeżeli odpowiednio
    // nadamy atrybuty name inputom możemy je wykorzystać do identyfikowania wprowadzonych danych
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Imię
          <input
            type="text"
            name="name"
            onChange={this.handleChange}
            value={this.state.name}
          />
        </label>
        <label>
          Nazwisko
          <input
            type="text"
            name="surname"
            onChange={this.handleChange}
            value={this.state.surname}
          />
        </label>
        <label>
          Wiek
          <input type="number" name="age" onChange={this.handleChange} />
        </label>
        <button type="submit">
          WYŚLIJ
        </button>
      </form>
    )
  }
}
