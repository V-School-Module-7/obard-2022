import React, { useState } from "react"
import { InlineWidget, CalendlyEventListener } from "react-calendly"
import Summary from "./Summary"



const Reservation = () => {
  const [eventData, setEventData] = useState({})
  const [reserved, setReserved] = useState(false)
  const page = {
    backgroundColor: "#FFFFFF",
    boxShadow: "0px 21px 35px rgba(121, 151, 170, 0.67)",
    width: "500px",
    height: "525px",
    textAlign: "center",
    margin: "auto"
  }
  const pageTwo = {
    backgroundColor: "#FFFFFF",
    boxShadow: "0px 21px 35px rgba(121, 151, 170, 0.67)",
    width: "700px",
    height: "525px",
    textAlign: "center",
    margin: "auto"
  }
  const contentWrapper = {
    display: 'flex'
  }
  const eventScheduled = (e) => {
    const data = e.data.payload
    setEventData(() => ({data}))
    setReserved(true)
  }
  return (
    <>
    {!reserved?
      <>
        <h1 style={{textTransform: "uppercase", fontSize: "40px"}}>select days and times</h1>
        <div style={contentWrapper}>
          <div style={{margin: "auto"}}>
            <CalendlyEventListener 
              // onDateAndTimeSelected={eventScheduled}
              onEventScheduled={eventScheduled}
              >
              <InlineWidget url="https://calendly.com/zapiencg/flight"
              styles={page}
              />
            </CalendlyEventListener>
          </div>
          <div style={pageTwo}>

          </div>
        </div>
      </>
      :
      <Summary data={eventData} />
    }
    </>
  )
}
export default Reservation