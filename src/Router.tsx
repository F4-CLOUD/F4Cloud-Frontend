import React from 'react';
import { Route, Switch } from 'react-router-dom';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import UserCloudPage from './pages/UserCloudPage';

const Router: React.FC = () => {
  return (
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route exact path="/login" component={LoginPage} />
      <Route exact path="/register" component={RegisterPage} />
      <Route exact path={['/@:username/', '/']} component={UserCloudPage} />
      <Route path="/@:username/:cloudId" component={UserCloudPage} />
      <Route path="/">404 not found</Route>
    </Switch>
  );
};

export default Router;
