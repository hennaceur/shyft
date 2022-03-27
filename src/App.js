import React from "react";
import "./css/App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import NotFound from "./pages/404";
import Menu from "./pages/menu/Menu";
import OpenHouse from "./pages/open-house/OpenHouse";
import Info from "./pages/info/Info";
import Profile from "./pages/profile/profile";
import Contact from "./pages/contact/Contact";
import SignIn from "./SignInScreen";
import User from "./pages/user/User";
import Dashboard from "./pages/dashboard/Dashboard";
function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={SignIn} />
          <Route exact path="/menu" component={Menu} />
          <Route exact path="/biggs" component={OpenHouse} />
          <Route exact path="/info" component={Info} />
          <Route exact path="/profile" component={Profile} />
          <Route exact path="/support" component={Contact} />
            <Route exact path="/dashboard" component={Dashboard} />
          <Route exact path="/user78141" component={User} />
          <Route component={NotFound} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
