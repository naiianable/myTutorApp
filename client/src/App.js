//import Navbar from "./components/NavBar/NavBar";
import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

import Home from "./components/Pages/Home/Home";
import LoginMain from "./components/Pages/Login/LoginMain";
import ParentLogin from "./components/Pages/Login/ParentLogin";
import TutorLogin from "./components/Pages/Login/TutorLogin";

function App() {
  
  return (

    <div >
      
      <Router>

        <Switch>

          <Route exact path="/">
            <Home />
          </Route>  

          <Route path="/loginMain">
            <LoginMain />
          </Route>

          <Route path="/tutorLogin">
            <TutorLogin />
          </Route>

          <Route path="/parentLogin">
            <ParentLogin />
          </Route>
        </Switch>
      
      </Router>
    </div>

  );
}

export default App;
