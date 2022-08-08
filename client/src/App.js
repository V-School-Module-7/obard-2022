import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import About from "./Pages/About";
import Home from "./Pages/Home";
import Reservation from "./Pages/Reservation";
// import Confirmation from "./Pages/Confirmation"
// import Summary from "./Pages/Summary";
import PaymentAndLicenseVerification from "./Pages/PaymentAndLicenseVerification";
//import CheckoutForm from "./CheckoutForm";

import "./app.css"


export default function App(){

  return (
    <div >
      <Navbar />
      <Routes>
            <Route
            exact path="/home"
            element={<Home/>}
            />
            <Route
            path="/reservation"
            element={<Reservation />}
            />
            <Route
            path='/about'
            element={<About/>}
            />
            <Route
            path="/payment"
            element={<PaymentAndLicenseVerification />}
            />
          </Routes>
    </div>
  )
}