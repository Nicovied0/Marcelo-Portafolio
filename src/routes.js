import React from 'react';
import { Home } from './views/Home';
import { About } from './views/About';
import { Contact } from './views/Contact';
import { NavBar } from './components/NavBar';
import { Footer } from './components/Footer';
import { Route, Switch, Redirect } from 'react-router-dom';


export const Routes = () => {
  return (
    <div>
      <NavBar />
      <Footer />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/home">
          <Redirect to="/" />
        </Route>
        <Route exact path="/about" component={About} />
        <Route exact path="/Contact" component={Contact} />
      </Switch>
    </div>
  );
};
