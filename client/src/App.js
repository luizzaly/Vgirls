import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";

import "./App.css";
import NavbarI from "./components/NavbarI";
import Index from "./containers/Index";
import Signup from "./components/Signup";
import Login from "./components/Login";

function App() {
  return (
    <div className="App">
      <h1>VGirls</h1>
      <NavbarI />
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Index} />
          <Route exact path="/auth/signup" component={Signup} />
          <Route exact path="/auth/login" component={Login} />}
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
