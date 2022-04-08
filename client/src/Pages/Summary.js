import axios from "axios";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

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
    boxShadow: "0px 21px 35px rgba(121, 151, 170, 0.67)",
    //position: "absolute",
    width: "1000px",
    height: "525px",
    //left: "100px",
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
      <h1 style={{textTransform: "uppercase", fontSize: "40px"}}>summary</h1>
      <div style={page}>
        <div >
          <h2 >summary details</h2>
          <div style={{display: "flex", justifyContent: "space-evenly"}}>
            <div style={{display: "flex"}}>
              <div style={{width: "130px", height: "90px", backgroundColor: "#032c45"}}></div>
              <h5>piper arrow II</h5>
            </div>
            <div>
              <h5>start: {scheduledEvent.start_time}</h5>
              <h5>end: {scheduledEvent.start_time}</h5>
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