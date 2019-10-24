import React, { Component } from 'react'

import axios from 'axios'

export default class Reset extends Component {


  constructor(){
    super();

    this.state = {
      email: ''
      
    }
    this.Email =this.Email.bind(this);
    
    this.handleReset =this.handleReset.bind(this);
   
  }
  Email(event){
    this.setState({email: event.target.value})

  }

  Password(event){
    this.setState({password: event.target.value})
  }
  Rpassword(event){
    this.setState({rpassword: event.target.value})
  }


  async handleReset(event) {
    event.preventDefault()
    console.log('state',this.state.email)

    let data = {
      email: this.state.email
      
     }
    
    console.log("here---->")
    await axios.post(`http://192.168.1.169:8080/user/forget`, data, {
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then((res) => {
        console.log(res);
      })

  }
  
  
  
  







    render() {
        return (
            <div className="login-box">
            <form  >
              <div className="container" >
                <h1>Reset Password</h1>
    
    
    
                <label htmlFor="test"><b>Email</b></label>
                <input type="text" onChange={this.Email} placeholder="username" name="email" required />
    
    
                <button type="submit" onClick={this.handleReset} className="signupbtn">Submit </button>
                </div>
                <div>

                


              </div>
            </form>
    
    
    
          </div>
    
        )
    }
}
