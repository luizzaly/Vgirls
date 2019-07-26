import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import Vulva from "./containers/Vulva";
import Overview from "./components/Overview";

import "./App.css";
import Navbar from "./components/Navbar";
import Index from "./containers/Index";
import Signup from "./components/Signup";
import Login from "./components/Login";

function App() {
  return (
    <div className="App">
      <h1>VGirls</h1>
      <Navbar />
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Index} />
<<<<<<< HEAD
          <Route exact path="/vulva" component={Vulva} />
          <Route exact path="/vulva/:title" component={Overview} />
=======
          <Route exact path="/auth/signup" component={Signup} />
          <Route exact path="/auth/login" component={Login} />}
>>>>>>> 59bc24c4c7d0b0170a209fba66fa943cf6b60996
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
