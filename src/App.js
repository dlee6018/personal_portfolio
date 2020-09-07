import React from "react";
import "./App.scss";
import HomePage from "./pages/HomePage";
import { BrowserRouter as Router } from "react-router-dom";
const App = () => {
  return (
    <Router>
      <div className="App">
        <HomePage />
      </div>
    </Router>
  );
};

export default App;
