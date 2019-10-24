import React,{Component} from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Login from './login';
import Signup from './signup';
import Reset from './reset';


import NewPassword from './forgotpass/reset'



export default class  App extends  Component {

  render(){
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
  
  
            <Route path="/signup" component={Signup} />
            <Route path="/login" component={Login} />
            <Route path="/reset" component={Reset} />
            <Route path="/forgotpass/reset/:id" component={NewPassword} />
            
  
  
          </Switch>
        </div>
      </Router>
    );
  }
  
  
}