import React,{Component} from 'react';

import './App.scss';
import axios from 'axios';

//const url = `http://196.168.1.169:8080`
class Login extends Component {

  constructor(){
    super();
    this.state = {
      email: '',
      password: ''
    }
    this.Email =this.Email.bind(this);
    this.Password = this.Password.bind(this);
    
    this.login =this.login.bind(this);
  }
  Email(event){
    this.setState({email: event.target.value})
  }
  Password(event){
    this.setState({password: event.target.value})
  }
  login(event){
    event.preventDefault()
    
    let data = {
      email: this.state.email,
      password: this.state.password
      

    }
    
    axios.post(`http://192.168.1.169:8080/user/login`,data,{
      headers: {
        'Content-Type': 'application/json'
      }
  })
    
    .then((res)=>{console.log('helll---->',res);
    })
    
  }
  render(){
    return (
    

        <div className="login-box" >

          <form onSubmit = {this.login}  >
            <div className="container">
                <h1>Login to Myntra</h1>
                    <label htmlFor="uname"><b>Email</b></label>
                    <input type="email" onChange ={this.Email} placeholder="Enter Username" name="uname" required/> 
                <br/>
                      <label htmlFor="psw"><b>Password</b></label>
                      <input type="password" onChange={this.Password} placeholder="Enter Password" name="psw" required/> 
                        
                  <button type="submit" >LOG IN</button>
                  
                      
                </div> 

                  
            </form>
          </div>

  );
  }
  
    }

    export default Login;