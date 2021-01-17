import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";

import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";
import Servicies from "./components/Services";
import Pholio from "./components/Pholio";
import Feedbacks from "./components/Feedbacks";
import Footer from "./components/Footer";
import Contacts from "./components/Contacts";

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/about" component={About} />
        <Route path="/servicies" component={Servicies} />
        <Route path="/pholio" component={Pholio} />
        <Route path="/feedback" component={Feedbacks} />
        <Route path="/contacts" component={Contacts} />
        <Route exact path="/" component={Home} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
