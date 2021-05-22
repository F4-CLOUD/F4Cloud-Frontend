import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './pages/HomePage';
import About from './pages/About';
import Services from './pages/Services';
import Contact from './pages/Contact';

const Router: React.FC = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/about" component={About} />
      <Route exact path="/services" component={Services} />
      <Route exact path="/contact" component={Contact} />
      <Route path="/">404 not found</Route>
    </Switch>
  );
};

export default Router;
