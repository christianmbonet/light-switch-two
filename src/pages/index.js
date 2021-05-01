import React from "react"


import React, { useState } from "react";
import './../components/index.css'

export default function Home() {
   
  const [on, setOn] = useState(false);

  const lightSwitchCenter = () => setOn(on => !on);
  const lightSwitchPink = () => setOn(on => !on);

  return <div className='page'>
  <div className='container'>
    <div className='topRow'>
        <button onClick={lightSwitchPink} className={on ? 'topLeftPink' : 'topLeftLightBlue'}></button>
        <div className={on ? 'topMiddleBlue' : 'topMiddlePink'}></div>
        <button onClick={lightSwitchPink} className={on ? 'topRightPink' : 'topRightLightBlue'}></button>
    </div>
    <div className='middleRow'>
        <div className={on ? 'middleLeftBlue': 'middleLeftPink'}></div>
        <button onClick={lightSwitchCenter} className='middleMiddle'></button>
        <div className={on ? 'middleRightBlue' : 'middleRightPink'}></div>
    </div>
    <div className='bottomRow'>
        <button onClick={lightSwitchPink} className={on ? 'bottomLeftPink' : 'bottomLeftLightBlue'}></button>
        <div className={on ? 'bottomMiddleBlue' : 'bottomMiddlePink'}></div>
        <div onClick={lightSwitchPink} className={on? 'bottomRightPink' : 'bottomRightLightBlue'}></div>
    </div>
  </div>
  </div>
}