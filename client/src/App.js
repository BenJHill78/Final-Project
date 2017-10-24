import React, { Component } from 'react';
import Home from "./pages/Home";

import Detail from "./pages/Detail";
import NoMatch from "./pages/NoMatch";
import Login from "./pages/Login";
import Register from "./pages/Register";
import HOAManager from "./pages/HOAManager";
import HomeOwner from "./pages/Homeowner/HomeOwner";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const App = () => 
<Router>
     <div>
      <Switch>
       <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/logout" component={Login} />
        <Route exact path="/Requests/:id" component={Detail} />
        <Route exact path="/HOAManager" component={HOAManager} />
        <Route exact path="/HomeOwner" component={HomeOwner} />
        <Route component={NoMatch} />
      </Switch>
     </div>
   </Router>

export default App;
 