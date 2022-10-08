import React from 'react'
import './login.css'
function Login() {
    return (
        <div>
        <form >
    <div className="imgcontainer">
      <img src="img_avatar2.png" alt="Avatar" className="avatar"/>
    </div>
  
    <div className="container">
      <label for="uname"><b>Username</b></label>
      <input type="text"  placeholder="Enter Username"  />
  
      <label for="psw"><b>Password</b></label>
      <input type="password"  placeholder="Enter Password"   />
  
      <button type="submit">Login</button>
      <label>
        <input type="checkbox" /> Remember me
      </label>
    </div>
  
    <div className="container canc" >
      <button type="button" className="cancelbtn">Cancel</button>
      <span className="psw">Forgot <a href="#">password?</a></span>
    </div>
  </form>
      </div>
        )
}

export default Login
