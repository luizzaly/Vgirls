import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import Vulva from "./containers/Vulva";
import Overview from "./components/Overview";
import Embryology from "./components/Embryology";
import Description from "./components/Description";
import Info from "./components/Info";
import Video from "./components/Video";

import "./App.css";
import Index from "./containers/Index";
import Signup from "./components/Signup";
import Login from "./components/Login";
import Navbar from "./components/Nav";

function App() {
  return (
    <div className="App">
      <Navbar />
      <h1>VGirls</h1>

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
          <Route exact path="/vulva/:title/gif" component={Video} />
          <Route exact path="/auth/signup" component={Signup} />
          <Route exact path="/auth/login" component={Login} />}
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
