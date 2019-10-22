import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Login from './login.jsx';
import Signup from './signup.jsx';
import Reset from './reset.jsx';

export default function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/signup">Sign Up</Link>
            </li>
            <li>
              <Link to="/reset">Reset Password </Link>
            </li>
          </ul>
        </nav>

       
        <Switch>
         
          <Route path="/signup" component ={Signup}/>
          <Route path="/login" component ={Login}/>
          <Route path="/reset" component ={Reset}/>
            
          
        </Switch>
      </div>
    </Router>
  );
}

