import React, { Component } from 'react'

export default class Reset extends Component {








    render() {
        return (
            <div className="login-box">
            <form  >
              <div className="container" >
                <h1>Reset Password</h1>
    
    
    
                <label htmlFor="test"><b>Username</b></label>
                <input type="text" onChange={this.Username} placeholder="username" name="email" required />
    
    
                <label htmlFor="tel" className="telph"><b>Mobile Number</b></label>
                <input type="tel" onChange={this.Phone} placeholder="Enter number" name="tel" required />
    
               
               <div className="clearfix">
                  <label htmlFor="psw"><b>OTP</b></label>
                  <input type="number" onChange={this.Otp} placeholder="Enter OTP" name="otp" required />
    
                  <button type="submit" onClick={this.handleOTP} className="signupbtn">Submit OTP</button>
                </div>

                <label htmlFor="text"><b>Password</b></label>
                <input type="text" onChange={this.Username} placeholder="enter password" name="email" required />
    
    
                <label htmlFor="text" className="telph"><b>Re-enter Password</b></label>
                <input type="text" onChange={this.Phone} placeholder="Re-enter password" name="tel" required />
    
               
               <div className="clearfix">
                  
                <button type="submit" onSubmit={this.resetHandler} className="signupbtn">Reset</button>
                </div>


              </div>
            </form>
    
    
    
          </div>
    
        )
    }
}
