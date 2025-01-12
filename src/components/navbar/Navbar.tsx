import React from 'react'
import { Nav , Navigations , CartLogo, Bars } from './Stytle'
import { useState } from 'react';
import { Link } from 'react-router-dom';


const Navbar = () => {
  const [activeBar, setActiveBar] = useState(false);
  const [Bar, setBar] = useState(false)
  const toggler = ()=>{
    setBar(Bar => !Bar);
    setActiveBar(activeBar => !activeBar)
  }
  return (
    <Nav>
        {/* <Logo src="" alt="image" /> */}
      <h4>Mephalti<span>3D</span></h4>
      <Navigations active = {activeBar} >
        <Link to="/">Home</Link>
        <Link to="/create">Create</Link>
        <Link to="/contacts">Contact</Link>
      </Navigations>

      <CartLogo>
        <img src="/icon/cart-shopping-solid.svg" alt="img" />
        <div>0</div>
      </CartLogo>
      <Bars src={Bar ? 'icon/icons8-cancel.svg' : 'assets/icons8-menu-48.png'} onClick={toggler}/>
    </Nav>
  )
}

export default Navbar
