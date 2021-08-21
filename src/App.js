import React, {useState} from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  useHistory,
} from "react-router-dom";
import Home from "./Pages/Home";
import Index from "./Pages/Index";

import FourOFour from "./Pages/FourOFour";

import axios from "axios"
import './App.css';

function App() {
  const [firstName, setFirstName] = useState("");
  const [zipCode, setZipCode] = useState("")



  return (
    <div className="App">
 <Router>
        <Switch>
          <Route exact path="/">
            <Home setFirstName={setFirstName} setZipCode={setZipCode} firstName={firstName} zipCode={zipCode}/>
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
