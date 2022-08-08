import React from 'react'
import cockpit from "../images/PiperCockpit.png"

export default function About () {

return (
  <div className='aboutSection'>
    <img src={cockpit} alt="plane"></img>
    <h1>1975 PIPER ARROW II</h1>
    <center>
      <p> This beautiful 1975 Piper Arrow II 200 hp retractable complex plane.
          You can rent this plane out for business from instructing flight lessons or clocking your pilot
          hours day or night. You can also take the plane out for pleasure and enjoy a weekend up in Jackson Hole or a
          night down in St. George; sky's the limit.</p><br/>
          $175 PER HOUR RESERVE NOW<br/>
          *50 to 100 hour blocks are discounted | Overnight flights available 1 week in advance<br/>
    </center>
</div>
)

}