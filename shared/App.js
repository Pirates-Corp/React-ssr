import React from "react";
import Home from "./Components/Home";
import About from "./Components/About";
import { Route } from "react-router-dom";

const App = () => {
  return (
    <React.Fragment>
      <switch>
        <Route path="/" exact={true} component={Home} />
        <Route path="/about" exact={true} component={About} />
      </switch>
    </React.Fragment>
  );
};

export default App;
