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
import home from './home.jsx'
import NewPassword from './forgotpass/reset'



export default function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
          <li>
              <Link to="/">Home Page</Link>
            </li>
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
          <Route exact path="/" component ={home}/>
         
          <Route path="/signup" component ={Signup}/>
          <Route path="/login" component ={Login}/>
          <Route path="/reset" component ={Reset}/>
          <Route path="/forgotpass/reset" component ={NewPassword}/>
            
          
        </Switch>
      </div>
    </Router>
  );
}

