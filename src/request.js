// Funkcja służąca do wykonywania zapytań
// dzięki opakowaniu fetcha w funkcje request możemy w dowolnym momencie
// użyć jakiejś innej biblioteki do wykonywania zapytań np. axios
// zmieniając tylko funkcję request, a nie szukając fetcha po wszystkich komponentach

// Dodatkowo możemy wydzielić powtarzające się elementy i nie powtarzać ich w reszcie aplikacji
// np. adres api, albo klucz lub nawet parsowanie odpowiedzi do formatu json
export const request = (endpoint, queryString = '') => {
  const url =
    'https://api.themoviedb.org/3/'
    + endpoint
    + '?'
    + queryString
    + '&api_key=612ebf63e580831559365d1bc93af503'

  return fetch(url).then(response => response.json())
}
