import React from 'react'
import { NavLink } from 'react-router-dom'


function Sign_Up() {
  return (
    <div>
      <form>
  <div className="container">
    <h1>Sign Up</h1>
    <p>Please fill in this form to create an account.</p>
    <hr />

    <label for="email"><b>Email</b></label>
    <input className='inputfield' type="text" placeholder="Enter Email" name="email" required/>

    <label for="psw"><b>Password</b></label>
    <input className='inputfield' type="password" placeholder="Enter Password" name="psw" required/>

    <label for="psw-repeat"><b>Repeat Password</b></label>
    <input className='inputfield' type="password" placeholder="Repeat Password" name="psw-repeat" required/>

    <label  style={{padding:"5px"}}>
      <input type="checkbox" name="remember"/> Remember me
    </label>

    <p>By creating an account you agree to our <NavLink to="">Terms & Privacy</NavLink>.</p>

    <div class="clearfix">
      <NavLink to="/Login"><button type="button" className="cancelbtn">Cancel</button></NavLink>
      <button type="submit" className="signupbtn">Sign Up</button>
    </div>
  </div>
</form>
    </div>
  )
}

export default Sign_Up