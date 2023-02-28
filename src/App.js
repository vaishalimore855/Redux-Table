import "./App.css";
import React from "react"
import Demo from "./component/demo";
import ShowUserData from "./component/ShowUserData";
import Info from "./component/Info";
import Header from "./component/Header";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (  
    
     
     <div className="App">
      <Router>
        <Header/>
        <Switch>
          <Route path="/" exact component={Info} />
          <Route path="/demo" component={Demo} />

          <Route path="/showuserdata" component={ShowUserData} />
          <Route>404 Not Found!</Route>
        </Switch>
      </Router>
    </div>
    
  );
}

export default App;
