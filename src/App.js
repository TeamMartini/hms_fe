import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { RootProvider } from './stores';
import Routes from './constants/routes';
import Home from './pages/Home';
import Suggest from './pages/Suggest';

import './App.scss';

function App() {
  return (
    <RootProvider>
      <BrowserRouter>
        <Switch>
          <Route exact path={Routes.ROOT} component={Home} />
          <Route path={Routes.SUGGEST} component={Suggest} />
        </Switch>
      </BrowserRouter>
    </RootProvider>
  );
}

export default App;
