
import './Navbar.scss'
import { TfiMenu } from "react-icons/tfi";
import Image from "./news2.png";
import { BsSearch } from "react-icons/bs";
// import { VscChromeClose } from "react-icons/vsc";
import Categories from './Categories';
import { NavLink } from 'react-router-dom';
import { useState } from 'react';
function Navbar() {

const [menuBar, setMenuBar] = useState(false);
const [search, setSearch] = useState(false);
function showMenu(e) {
  e.stopPropagation()
  setMenuBar(true)
}
// const inputBox=useRef()
function showSearch(e) {
  e.stopPropagation()
  // inputBox.current.focus();
  setSearch(true)
}
function searchcut(e){
  e.stopPropagation()
  setSearch(false);
}
function navdiv(e){
  e.stopPropagation()
  setMenuBar(false);
}
     return (
         <div className='navbar' onClick={(e)=>{navdiv(e)}}> 
         <div className="header">
          {menuBar?
          <div className='menudiv'>
            {/* <VscChromeClose className='close'/> */}
            <img src={Image} alt="Logo" className='listimg'/>
            <ul>
              <NavLink className={"menulist"} to="/">Home</NavLink>
              <NavLink className={"menulist"} to="About">About</NavLink>
              <NavLink className={"menulist"} to="Contact">Contact</NavLink>
              <NavLink className={"menulist"} to="SignUp">Sign Up</NavLink>
              <NavLink className={"menulist"} to="LogIn">Log In</NavLink>
            </ul>
            
          </div>:null   
          } 
          <div className='searchinput' onClick={(e)=>{searchcut(e)}}>
            {search?
            <span className='newinput'>
            <input type="search" placeholder='Search'/>
            </span>
            :null
            }
          </div>
            {/* <div className='upNav'> */}
        <TfiMenu className='menu' onClick={(e)=>{showMenu(e)}}/>
      <img src={Image} alt="Logo" className='navlogo' /> 
      <BsSearch className='searchlogo' onClick={(e)=>{showSearch(e)}}/>
      {/* </div> */}
         </div>
          <Categories/>
          </div>
     )

}

export default Navbar