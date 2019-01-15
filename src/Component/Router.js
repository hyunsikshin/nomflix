import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from 'react-router-dom';
import Header from './Header';
import Home from '../Routes/Home';
import Search from '../Routes/Search';
import TV from '../Routes/TV';

export default () => (
  <Router>
    <>
      <Header />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/search" component={Search} />
        <Route path="/tv" component={TV} />
        <Redirect from="*" to="/" />
      </Switch>
    </>
  </Router>
);
