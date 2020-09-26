import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route, Redirect
} from "react-router-dom";

import Navbar from "./Navbar";
import Home from "./Home";
import Live from "./Live";

export default function Routing(){
  return(
    <Router>
      <Navbar>
        <Switch>
          <Route exact path="/home" component={Home}/>
          <Route exact path="/live" component={Live}/>

          <Redirect from="/" to="/home"/>
        </Switch>
      </Navbar>
    </Router>
  );
}