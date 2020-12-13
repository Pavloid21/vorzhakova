import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import './App.css';

import Header from './components/Header'
import Home from './components/Home'
import About from './components/About'
import Servicies from './components/Services'
import Pholio from './components/Pholio'
import Feedbacks from './components/Feedbacks';

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/about" component={About} />
        <Route path="/servicies" component={Servicies}/>
        <Route path="/pholio" component={Pholio}/>
        <Route path="/feedback" component={Feedbacks} />
        <Route path="/contacts">
          <div>Contacts</div>
        </Route>
        <Route exact path="/" component={Home}/>
      </Switch>
    </Router>
  );
}

export default App;
