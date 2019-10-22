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
    this.setState({Email: event.target.value})
  }
  Password(event){
    this.setState({Password: event.target.value})
  }
  login(){
    
    let data = {
      email: this.state.email,
      password: this.state.password
      

    }
    
    axios.post(`http://192.168.0.89:8080/auth/login`,data,{
      headers: {
        'Content-Type': 'application/json'
      }
  })
    
    .then((res)=>{console.log(res);
    }).then((result)=>console.log(result.data))
    
  }
  render(){
    return (
    

        <div className="login-box" >

          <form   >
            <div className="container">
                <h1>Login to Myntra</h1>
                    <label htmlFor="uname"><b>Email</b></label>
                    <input type="email" onChange ={this.email} placeholder="Enter Username" name="uname" required/> 
                <br/>
                      <label htmlFor="psw"><b>Password</b></label>
                      <input type="password" onChange={this.password} placeholder="Enter Password" name="psw" required/> 
                        
                  <button type="submit" onClick={this.login}>LOG IN</button>
                  <br/>
                  <button type="submit" style={{width:"30%",backgroundColor:"#105918"}} onClick={this.reset}>RESET PASSOWORD</button>
                      
            </div> 

                  
            </form>
          </div>

  );
  }
  
    }

    export default Login;