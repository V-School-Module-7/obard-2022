import React from "react";
import { FaHome } from "react-icons/fa"
import { useNavigate } from "react-router-dom";

export default function Success(){
  const page = {
    backgroundColor: "#FFFFFF",
    boxShadow: "0px 21px 35px rgba(121, 151, 170, 0.67)",
    //position: "absolute",
    width: "1300px",
    height: "600px",
    //left: "100px",
    //top: "90px",
    textAlign: "center",
    margin: "auto"
  }
  const navigate = useNavigate()
  const backToHome = () => {
    navigate("/reservation")
  }
  return (
    <div style={page}>
      <div>
        <div>
          <h1 style={{color: "#567384", textTransform: "uppercase"}}>
            congratulations!
          </h1>
          <h1 >
          Your reservation has been sent for confirmation.
          </h1>
          <p style={{color: "#567384", textTransform: "uppercase"}}>confirmation number</p>
          <h1  >#123456789</h1>
          <p style={{fontWeight: "bold"}}>An email of receipt has been sent to your address.</p>
          <p style={{fontWeight: "bold"}}>You will receive another email confirming reservation after license and insurance is verified.</p>
        </div>
        <div style={{}}>
          <p><FaHome style={{color: "#567384", height: "75px", width: "60px"}} /></p>
          <button onClick={backToHome}><p style={{color: "#567384"}}>Back Home</p></button>
        </div>

      </div>
    </div>
  )
}