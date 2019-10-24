import React, { Component } from 'react'


import axios from 'axios'


export default class NewPassword extends Component {


  constructor() {
    super();

    this.state = {
      password: '',
      rpassword: ''

    }

    this.Password = this.Password.bind(this);
    this.Rpassword = this.Rpassword.bind(this);

    this.resetHandler = this.resetHandler.bind(this);
  }


  Password(event) {
    this.setState({ password: event.target.value })
  }
  Rpassword(event) {
    this.setState({ rpassword: event.target.value })
  }



  async resetHandler(event) {
    event.preventDefault()

    if (this.state.password === this.state.rpassword) {
      console.log("id---->", this.props.match.params.id)
      let data = {
        password: this.state.password,
        id: this.props.match.params.id
      }

      console.log("here---->")
      await axios.post(`http://192.168.1.169:8080/user/forget/${this.props.match.params.id}`, data, {
        headers: {
          'Content-Type': 'application/json'
        }
      })
        .then((ress) => {
          console.log(ress);
        })
    }
    else {
      alert("confirm password is not matched!!");
    }
  }

  render() {
    return (
      <div className="login-box">
        <form onSubmit={this.resetHandler} >
          <div className="container" >
            <h1>Reset Password</h1>

            <label htmlFor="text"><b>Password</b></label>
            <input type="password" onChange={this.Password} placeholder="enter password" name="psw" required />


            <label htmlFor="text" className="telph"><b>Re-enter Password</b></label>
            <input type="password" onChange={this.Rpassword} placeholder="Re-enter password" name="psw" required />


            <div className="clearfix">

              <button type="submit" className="signupbtn">Reset</button>
            </div>


          </div>
        </form>



      </div>

    )
  }
}