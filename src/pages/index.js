import React, { useState } from "react";
import './../components/index.css'

export default function Home() {
   
  const [on, setOn] = useState(false);
  const [initialColor, setInitialColor] = useState(false);

  const lightSwitchCenter = () => setOn(on => !on);
  const lightSwitchPink = () => setInitialColor(initialColor => !initialColor);

  return <div className='page'>
  <div className='container'>
    <div className='topRow'>
        <button onClick={lightSwitchPink} className={initialColor ? 'topLeftPink' : 'topLeftLightBlue'}></button>
        <div className={initialColor ? 'topMiddleBlue' : 'topMiddlePink'}></div>
        <button onClick={lightSwitchPink} className={initialColor ? 'topRightPink' : 'topRightLightBlue'}></button>
    </div>
    <div className='middleRow'>
        <div className={initialColor ? 'middleLeftBlue': 'middleLeftPink'}></div>
        <button onClick={lightSwitchCenter} className={on ? 'middleMiddle' : 'middleMiddleBlack'}></button>
        <div className={initialColor ? 'middleRightBlue' : 'middleRightPink'}></div>
    </div>
    <div className='bottomRow'>
        <button onClick={lightSwitchPink} className={initialColor ? 'bottomLeftPink' : 'bottomLeftLightBlue'}></button>
        <div className={initialColor ? 'bottomMiddleBlue' : 'bottomMiddlePink'}></div>
        <div onClick={lightSwitchPink} className={initialColor ? 'bottomRightPink' : 'bottomRightLightBlue'}></div>
    </div>
  </div>
  </div>
}