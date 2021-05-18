import React from 'react';
import { Route, Switch } from 'react-router-dom';
import HomePage from './pages/Homepage/HomePage';
import LoginPage from './pages/LoginPage/LoginPage';
import RegisterPage from './pages/RegisterPage/RegisterPage';
import AboutPage from './pages/AboutPage/AboutPage';
import ContactPage from './pages/ContactPage/ContactPage';
import ServicePage from './pages/ServicePage/ServicePage';
import UserCloudPage from './pages/UserCloudPage/UserCloudPage';

const Router: React.FC = () => {
  return (
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route exact path="/login" component={LoginPage} />
      <Route exact path="/register" component={RegisterPage} />
      <Route exact path="/about" component={AboutPage} />
      <Route exact path="/service" component={ServicePage} />
      <Route exact path="/contact" component={ContactPage} />
      <Route exact path={['/@:username/', '/']} component={UserCloudPage} />
      <Route path="/@:username/:cloudId" component={UserCloudPage} />
      <Route path="/">404 not found</Route>
    </Switch>
  );
};

export default Router;
