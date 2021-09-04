import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Form from "./components/Form";
import FormLogin from "./components/FormLogin";
import Home from "./components/Home";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/form" component={Form} />
        <Route path="/login" exact component={FormLogin} />
      </Switch>
    </Router>
  );
};

export default App;
