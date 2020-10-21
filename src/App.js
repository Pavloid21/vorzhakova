import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import './App.css';

import Header from './components/Header'
import Home from './components/Home'
import About from './components/About'

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/about" component={About} />
        <Route path="/servicies">
          <div>Servicies</div>
        </Route>
        <Route path="/pholio">
          <div>Pholio</div>
        </Route>
        <Route path="/feedback">
          <div>Feedbacks</div>
        </Route>
        <Route path="/contacts">
          <div>Contacts</div>
        </Route>
        <Route exact path="/" component={Home}/>
      </Switch>
    </Router>
  );
}

export default App;
