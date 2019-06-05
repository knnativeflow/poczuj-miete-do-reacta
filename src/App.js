import React from 'react';

// Importujemy komponenty z biblioteki React Router, których użyjemy do skonstruowania routingu
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import List from './List'; // Przeniesiona logika pobierania listy z App do List
import Details from './Details';
import './App.css';

class App extends React.Component {
  render () {
    return (
      // Komponent ReactRoutera, który okala całą aplikacje, dzięki temu wszędzie będziemy mogli używać dobrodziejst biblioteki
      <BrowserRouter>
        {/* BrowserRouter przyjmuje tylko jedno dziecko dlatego używam <>, można oczywiście uzyć div albo innych tagów */}
        <>
          {/* Switch to komponent, który powoduje, że tylko jeden Route w Switchu jest wyświetlany nawet jeśli ścieżka pasuje do kilku  */}
          <Switch>
            {/* Route pozwala na wyrenderowanie wybranego komponentu w zależności od aktualnego adresu strony */}
            {/*
              Dodatkowo wspiera path-to-regexp czyli możemy używać np `/movie/:zmienna` co będzie prawidłowym adresem dla `/movie/aaa`, `movie/1234`, `movie/an21b123b`
              później mamy do tego dostęp w renderowanym komponencie w dodawanym automatycznie propsie match
              obiekt match posiada pole `params` w którym znajdziemy później naszą zmienną `{zmienna: aaa}`, `{zmienna: 1234}`, `{zmienna: an21b123b}`
            */}
            <Route path="/movie/:id" component={Details}/>
            <Route path="/" component={List}/>
          </Switch>
        </>
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
