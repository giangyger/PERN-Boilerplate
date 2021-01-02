import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomeView from "../views/home";

const Navigation: React.FC = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={HomeView} />
      </Switch>
    </Router>
  );
};

export default Navigation;
