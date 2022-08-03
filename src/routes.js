import React from 'react';
import { Home } from './views/Home';
import { About } from './views/About';
import { Portfolio } from './views/Portfolio';
import { NavBar } from './components/NavBar';
import { Footer } from './components/Footer';
import { Route, Switch, Redirect } from 'react-router-dom';


export const Routes = () => {
  return (
    <div>
      <NavBar />
      <Footer />
      <Switch>
        <Route exact path="/home" component={Home} />
        <Route exact path="/">
          <Redirect to="/home" />
        </Route>
        <Route exact path="/about" component={About} />
        <Route exact path="/portfolio" component={Portfolio} />
      </Switch>
    </div>
  );
};
