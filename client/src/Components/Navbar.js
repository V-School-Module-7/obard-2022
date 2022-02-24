import React from "react";
import {Link} from "react-router-dom"

export default function Navbar(){
  return (
    <nav>
      <ul className="navBar">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/reservation">Make a reservation</Link></li>
      </ul>
    </nav>
  )
}