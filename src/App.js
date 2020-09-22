import React, { useState } from "react";
import "./App.scss";
import HomePage from "./pages/HomePage";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import WorkPage from "./pages/WorkPage";
import SmallNavigation from "./components/navigation/SmallNavigation";
const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route exact path="/about">
          <SmallNavigation />
          <AboutPage />
        </Route>
        <Route exact path="/contact">
          <SmallNavigation />
          <ContactPage />
        </Route>
        <Route exact path="/work">
          <SmallNavigation />
          <WorkPage />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
