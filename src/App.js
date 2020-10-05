import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import HomePage from './pages/homepage/homepage.component';

const TightsPage = () => (
  <div>
    <h1>TIGHTS PAGE</h1>
  </div>
);

function App() {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/tights' component={TightsPage} />
      </Switch>
    </div>
  );
}

export default App;
