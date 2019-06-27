import React from 'react';

import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';

import List from './List';
import Details from './Details';
import NotFound from './NotFound';
import Login from './Login';
import Search from './Search';

import './App.css';

class App extends React.Component {
  render () {
    return (
      <BrowserRouter>
        {/*
          * O ile w większości przypadków chcemy, żeby Route renderował nam zupełnie inną stronę
          * na podstawie jakieś ścieżki to może się okazać, że pewne elementy jak np. header, nawigacja czy stopka
          * są wspólne dla wszystkich podstron. Wtedy możemy wygodnie dodać te komponenty "obok" naszy routów.
          * W tym przypadku poniższy
          */}
        <header className="topbar">
          <div className="container">
            <Link to="/" className="logo-link">
              <h1 className="logo">prawie FILMWEB</h1>
            </Link>
            <Link to="/search" className="search-link">Wyszukiwarka</Link>
          </div>
        </header>
        <Switch>
          <Route exact={true} path="/movie/:id" component={Details} />
          <Route exact={true} path="/" component={List} />
          <Route exact={true} path="/search" component={Search} />
          <Route exact={true} path="/login" component={Login} />
          <Route component={NotFound} />
        </Switch>
        <footer className="footer">
          {/* Warto zaznaczyć, że linki, które mają wychodzić na zewnątrz naszej strony robimy "normalnie"
            * przy użyciu tagu <a />, a nie jak w przypadku linków wewnątrz strony <Link />
            */}
          <p>Poczuj mięte do Reacta! <a href="https://nativeflow.napwr.pl">KN Native Flow</a></p>
        </footer>
      </BrowserRouter>
    )
  }
}

export default App;

/*
Więcej na temat <Route /> https://reacttraining.com/react-router/web/api/Route
Więcej na temat <Switch /> https://reacttraining.com/react-router/web/api/Switch
Więcej na temat <BrowserRouter /> https://reacttraining.com/react-router/web/api/BrowserRouter
*/
