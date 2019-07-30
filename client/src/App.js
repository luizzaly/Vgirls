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
import Profile from "./components/Profile";

class App extends React.Component {
  state = {
    user: this.props.user
  };

  setUser = user => {
    this.setState({ user });
  };
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Navbar user={this.state.user} setUser={this.setUser} />

          <Switch>
            <Route exact path="/" component={Index} />
            <Route exact path="/vulva" component={Vulva} />
            <Route exact path="/vulva/:title" component={Overview} />
            <Route
              exact
              path="/vulva/:title/embryology"
              component={Embryology}
            />
            <Route
              exact
              path="/vulva/:title/description"
              component={Description}
            />
            <Route exact path="/vulva/:title/info" component={Info} />
            <Route
              exact
              path="/auth/signup"
              // component={Signup}
              render={props => <Signup setUser={this.setUser} {...props} />}
            />
            <Route
              exact
              path="/auth/login" //component={Login}
              render={props => <Login setUser={this.setUser} {...props} />}
            />
            <Route
              exact
              path="/profile"
              render={props => (
                <Profile
                  setUser={this.setUser}
                  user={this.state.user}
                  {...props}
                />
              )}
            />
            <Route exact path="/profile/:userId" component={Profile} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
