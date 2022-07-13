import axios from "axios";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../CSS/summaryDetails.css"

const useraxios = axios.create()
useraxios.interceptors.request.use(config => {
  const token = "eyJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczovL2F1dGguY2FsZW5kbHkuY29tIiwiaWF0IjoxNjQ1ODExMTIzLCJqdGkiOiJmMzQwNWM3Ny01OTdjLTQ3NDItOGMxYi1hYmY4NzUyZTFhNzkiLCJ1c2VyX3V1aWQiOiJlOGMzNGM0Yy0yNDRlLTQyNTQtYmFiNC03ODcwYjZlZTY1ZjgifQ.1f1ftWD6604kc6vSAi3wrYPQX3iT2kH7QdzPWo6v2aM"
  config.headers.Authorization = `Bearer ${token}`
  return config
})

const Summary = ({data}) => {
  console.log('data: ', data.data.event.uri);
  const [scheduledEvent, setScheduleEvent] = useState({})
  console.log('scheduledEvent: ', scheduledEvent);
  
  const getEventData = () => {
    useraxios.get(`${data.data.event.uri}`)
      .then(res => {
        //console.log(res.data.resource)
        const data = res.data.resource
        setScheduleEvent(() => ({...data}))
      })
      .catch(err => console.log(err))

  }
  const page = {
    backgroundColor: "#FFFFFF",
    boxShadow: "10px 0px 35px rgba(121, 151, 170, 0.67)",
    //position: "absolute",
    width: "1000px",
    height: "525px",
    // left: "1308.62px",
    //top: "90px",
    textAlign: "center",
    margin: "auto",
    fontSize: "18px",
    textTransform: "uppercase"
  }
  const reservationBtn = {
    backgroundColor: "#032c45",
    height: "80px",
    width: "300px",
    color: "#FFFFFF",
    fontSize: "18px",
    textTransform: "uppercase"
  }
  const startdate = new Date(scheduledEvent.start_time)
  const endDate = new Date(scheduledEvent.end_date)
  const getDate = (date) => {
    const newDate = new Date(date)
    const dateMonth = newDate.getMonth()
    return console.log(dateMonth)
  }
  const navigate = useNavigate()
  const proceedToPayment = () => {
    navigate("/payment")
  }
  useEffect(() => {
    getEventData()
  }, [])
  return (
    <div>
      <h1 style={{fontFamily: "Arial" ,textTransform: "uppercase", fontSize: "48px", letterSpacing: "0.2em"}}>summary</h1>
      <div style={page}>
        <div className="summary-details" >
          <h2 style={{fontFamily: "Arial", fontStyle: "normal", fontWeight:"700", fontSize: "18px", lineHeight:"21px", letterSpacing:"0.4em"}}>summary details</h2>
          <div style={{display: "flex"}}>
            <div style={{display: "flex", marginRight: "300px"}}>
              <div style={{width: "130px", height: "90px", backgroundColor: "#032c45", marginRight:"10px"}}></div>
              <h5>piper arrow II</h5>
            </div>
            <div className="time-cost">
              <h5>start: <b>{scheduledEvent.start_time}</b></h5>
              <h5>end: <b>{scheduledEvent.start_time}</b></h5>
              <h5>estimated cost: </h5>
            </div>
          </div>
          <div>
            <h5>total hours:</h5>
            <button style={reservationBtn} onClick={proceedToPayment}>pay $10 reservation</button>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Summary