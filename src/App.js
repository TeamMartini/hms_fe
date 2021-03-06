import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { RootProvider } from './stores';
import Routes from './constants/routes';
import Intro from './pages/Intro';
import Home from './pages/Home';
import Suggest from './pages/Suggest';

import './App.scss';
import Place from './pages/Place';
import LoginChecker from './components/common/LoginChecker';

const App = () => (
  <RootProvider>
    <LoginChecker />
    <BrowserRouter>
      <div className="background" />
      <Switch>
        <Route exact path={Routes.ROOT} component={Home} />
        <Route path={Routes.INTRO} component={Intro} />
        <Route path={Routes.PLACE} component={Place} />
        <Route path={Routes.SUGGEST} component={Suggest} />
      </Switch>
    </BrowserRouter>
  </RootProvider>
);

export default App;
