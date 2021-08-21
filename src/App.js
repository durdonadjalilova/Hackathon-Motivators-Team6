import React, {useState} from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  useHistory,
} from "react-router-dom";
import Home from "./Pages/Home";
import Index from "./Pages/Index";
import axios from "axios"
import './App.css';

function App() {
  return (
    <div className="App">
 <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/motivators">
            <Index />
          </Route>
          {/* <Route path="*">
            <FourOFour />
          </Route> */}
        </Switch>
      </Router>
    </div>
  );
}

export default App;
