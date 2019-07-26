import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import Vulva from "./containers/Vulva";
import Overview from "./components/Overview";
import Embryology from "./components/Embryology";
import Description from "./components/Description";
import Info from "./components/Info";

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
          <Route exact path="/vulva" component={Vulva} />
          <Route exact path="/vulva/:title" component={Overview} />
          <Route exact path="/vulva/:title/embryology" component={Embryology} />
          <Route
            exact
            path="/vulva/:title/description"
            component={Description}
          />
          <Route exact path="/vulva/:title/info" component={Info} />
          <Route exact path="/auth/signup" component={Signup} />
          <Route exact path="/auth/login" component={Login} />}
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
