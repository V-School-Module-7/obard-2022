import React from "react";
import {NavLink} from "react-router-dom"

export default function Navbar(){
  return (
    <div>
      <nav className="navBar">
        <NavLink 
        to="/home" 
        >Home</NavLink>
        <NavLink 
        to="about"
        >About</NavLink>
        <NavLink 
        to="reservation" 
        >Make a reservation</NavLink>
      </nav>
    </div>
  )
}