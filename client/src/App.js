import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import Vulva from "./containers/Vulva";
import Overview from "./components/Overview";
import Embryology from "./components/Embryology";
import Description from "./components/Description";
import Info from "./components/Info";
import Typeone from "./components/Typeone";
import Uterus from "./containers/Uterus";

import "./App.css";
import Index from "./containers/Index";
import Signup from "./components/Signup";
import Login from "./components/Login";
import Navbar from "./components/Nav";
import Mutilationdescription from "./components/Mutilationdescription";
import Typetwo from "./components/Typetwo";
import Typeonedescription from "./components/Typeonedescription";
import Typetwodescription from "./components/Typetwodescription";
import Typethreedescription from "./components/Typethreedescription";
import Fullcut from "./components/Fullcut";
import Profile from "./components/Profile";
import EmbryologyUterus from "./components/EmbryologyUterus";
import DescriptionUterus from "./components/DescriptionUterus";
import OverviewUterus from "./components/OverviewUterus";
import InfoUterus from "./components/InfoUterus";
import Gif from "./components/Gif";
import GifUterus from "./components/GifUterus";
import Gyn from "./containers/Gyn";
import AddGyn from "./components/AddGyn";

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
              path="/femalegenitalmutilation"
              component={Mutilationdescription}
            />
            <Route exact path="/type1" component={Typeone} />
            <Route
              exact
              path="/type1-explanation"
              component={Typeonedescription}
            />

            <Route exact path="/type2" component={Typetwo} />
            <Route
              exact
              path="/type2-explanation"
              component={Typetwodescription}
            />
            <Route exact path="/type3" component={Fullcut} />
            <Route
              exact
              path="/type3-explanation"
              component={Typethreedescription}
            />
            <Route exact path="/uterus" component={Uterus} />
            <Route exact path="/uterus/:title" component={OverviewUterus} />
            <Route
              exact
              path="/uterus/:title/embryology"
              component={EmbryologyUterus}
            />
            <Route
              exact
              path="/uterus/:title/description"
              component={DescriptionUterus}
            />
            <Route exact path="/uterus/:title/info" component={InfoUterus} />
            <Route exact path="/Gif" component={Gif} />
            <Route exact path="/GifUterus" component={GifUterus} />
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
            <Route exact path="/gyn" component={Gyn} />
            <Route exact path="/gyn/add-gyn" component={AddGyn} />
            <Route exact path="/profile/:userId" component={Profile} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
