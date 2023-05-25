import React, {useState} from 'react'
import logo from "../assets/images/logo.png"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import '../components/navBar.css';
function NavBar() {
  return (
    <>
    <nav className='navbar'>
        <div className='navbar-container-1'>
         <img src = {logo} alt='logo' className='logo-container'/>
        </div>

        <div className='navbar-container-2'>
        <p>Home</p>
        <p>Shop</p>
        <p>My Account</p>
        <p>About</p>
        <p>Contact</p>
        <p>$0.0</p>
        <div className='image-container'>
        <FontAwesomeIcon id='shopping-bag' color='#9ECEF0' icon="fa-solid fa-bag-shopping"  />
        </div>
        <div className='main-menu-container'>
        <FontAwesomeIcon id='hamburger-menu' icon="fa-solid fa-bars" />
        </div>
        
       
        
        </div>
    </nav>

   

    </>
  )
}

export default NavBar