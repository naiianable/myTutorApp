//import Navbar from "./components/NavBar/NavBar";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

import Main from "./components/Pages/Main"
import ParentLogin from "./components/Pages/ParentLogin";
import TutorLogin from "./components/Pages/TutorLogin";

function App() {
  
  return (

    <div >
      
      <Router>

        <Switch>

          <Route exact path="/">
            <Main />
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
