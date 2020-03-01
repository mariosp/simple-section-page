import React, {useState} from 'react';
import './App.css';
import Header from "./components/HeaderComponent/Header";
import Home from "./components/HomeComponent/Home";
import {Route, Switch} from "react-router"
import {BrowserRouter as Router} from "react-router-dom"
import Page2 from "./components/Page2Component/Page2";

function App() {
  return (
      <>
      <Router>
      <Header />
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/1" component={Page2}/>
            </Switch>
      </Router>
      </>
  );
}

export default App;
