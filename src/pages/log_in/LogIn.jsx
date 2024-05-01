import React from 'react'
import { NavLink } from 'react-router-dom'
import "./LogIn.scss";
import Image from "./anonymous.png"
import { BsEyeFill } from 'react-icons/bs';


function Log_In() {
  
  return (
    <div className='loginmain'>
      <div className='logdiv'>
        <img className='logimg' src={Image} alt="" />
        <h1> USER LOGIN</h1>
        <forms >
          <div>
          <label> Username:
        <input className='inputlog'  type="text" placeholder='Enter Username / Email ID'/>
        </label>
        <label> Password:<BsEyeFill className='eye'/>
        <input className='inputlog'  type="password" placeholder='Enter Password' />
        </label>
        <label>Remember me &nbsp;
        <input className='check' type="checkbox" name="remember" />
        </label>
        </div>
        <NavLink className={'forget'}>ForgetPassword?</NavLink>
        <button className='logbtn' >Login</button>
          <NavLink className={'signup'} to="/SignUp">Sign Up</NavLink>
          </forms>
      </div>
    </div>
  )
}

export default Log_In