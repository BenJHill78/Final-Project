import React, { Component } from 'react';
import Home from "./pages/Home";
import HOAManager from "./pages/HOAManager";
import HomeOwner from "./pages/HomeOwner";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const App = () => 
<Router>
     <div>
      <Route exact path="/" component={Home} />
      <Route exact path="/HOAManager" component={HOAManager} />
      <Route exact path="/HomeOwner" component={HomeOwner} />

      </div>
      </Router>

export default App;
 