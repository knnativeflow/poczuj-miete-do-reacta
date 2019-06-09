import React from 'react';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

import List from './List';
import Details from './Details';
import './App.css';

class App extends React.Component {
  render () {
    return (
      <BrowserRouter>
        <>
          <Switch>
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
