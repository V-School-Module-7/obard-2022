import React from "react";
import {Link} from "react-router-dom"

export default function Navbar(){
  return (
    <div>
      <ul className="navBar">
        <li><Link to="/home">Home</Link></li>
        <li><Link to="about">About</Link></li>
        <li><Link to="reservation">Make a reservation</Link></li>
      </ul>
    </div>
  )
}