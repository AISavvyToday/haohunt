// src/App.js
import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Auth from './components/Auth/Auth';
import PrivateRoute from './components/Auth/PrivateRoute';
import ListingComponent from './components/ListingComponent';  // Make sure this path is correct

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          <Switch>
            <Route path="/auth" component={Auth} />
                        <PrivateRoute path="/private" component={ListingComponent} />
            {/* Add other routes here as needed */}
          </Switch>
        </header>
      </div>
    </Router>
  );
}

export default App;
