import React from 'react';
import ReactDOM from 'react-dom';

// Importuje główny komponent
import App from './App';

// Wskazuje webpackowi (skrypt łączący wszystko w całość),
// żeby "wstrzyknął" style z pliku index.css do index.html
import './index.css';

 /*
* Metoda render pozwala nam na "podczepienie" Reacta do strony
* document.getElementById('root') znajduje diva z id root w pliku index.html
* i renderuje w środku komponent <App />
*/
ReactDOM.render(<App />, document.getElementById('root'));
