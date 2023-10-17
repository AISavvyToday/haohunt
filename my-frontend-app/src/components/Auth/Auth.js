// src/components/Auth/Auth.js
import React, { useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import RegisterForm from './RegisterForm';
import LoginForm from './LoginForm';
import UserProfile from '../UserProfile/UserProfile';  // Import UserProfile component

const Auth = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [token, setToken] = useState(null);

  const handleLogin = (newToken) => {
    setIsAuthenticated(true);
    setToken(newToken);
    localStorage.setItem('authToken', newToken);
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setToken(null);
    localStorage.removeItem('authToken');
  };

  return (
    <Switch>
      <Route path="/auth/register">
        <RegisterForm handleLogin={handleLogin} />
      </Route>
      <Route path="/auth/login">
        <LoginForm handleLogin={handleLogin} />
      </Route>
      <Route path="/auth/profile">
        <UserProfile token={token} />
      </Route>
    </Switch>
  );
};

export default Auth;