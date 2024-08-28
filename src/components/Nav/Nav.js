import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import "./Nav.css";

const Nav = () => {
  const [show,setShow]= useState(false);

const transitionNavbar =()=>{
  if(window.scrollY > 100){
    setShow(true)
  }
  else{
    setShow(false)
  }
};

useEffect(()=>{
  window.addEventListener("scroll",transitionNavbar);
  return ()=>window.removeEventListener("scroll",transitionNavbar)
},[]);
console.log(show);


  return (
    <nav className={`nav ${show && "nav__black"}`}>
    <div className='nav__contents'>
    <Link to="/">
    <img
    src='https://www.freepnglogos.com/uploads/netflix-logo-text-emblem-31.png'
    alt=""
    className='nav__logo'
    />
    </Link>
    <Link to="/profile">
    <img src='https://t4.ftcdn.net/jpg/03/37/25/47/240_F_337254777_OM3DHj6gHfvI5fWIzgLyPjJA5yTsmaU0.jpg' 
    alt=""
    className='nav__avatar'/>
    </Link>
    </div>

    </nav>
  )
}

export default Nav