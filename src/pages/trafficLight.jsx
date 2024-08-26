
import React, { useState, useEffect } from 'react';

export default function TrafficLight() {
  const [light, setLight] = useState('red');

  useEffect(() => {
    const timer = setTimeout(() => {
      switch (light) {
        case 'red':
          setLight('green');
          setTimeout(()=> setLight('yellow'), 3000)
          break;
        case 'yellow':
          setLight('red');
          break;
        case 'green':
          setLight('yellow');
          break;
        default:
          break;
      }
    }, getDuration(light));
    return ()=> clearTimeout(timer);
  }, [light])

  const getDuration = (currentLight) =>{
    switch (currentLight) {
      case 'red':
        return 4000;
      case 'yellow':
        return 500;
      case 'green':
        return 3000;
      default:
        return 0;
    }
  }
 

  return (
   <>
   {/* <div style={{ display:"flex", flexDirection:"column",justifyContent:"center", alignItems:"center"}}>
    <div style={{backgroundColor:"#747E8B",width:"12%",height:"200px",marginTop:"20%" ,display:"flex", flexDirection:"column",justifyContent:"center", alignItems:"center"}}>
      <div style={{backgroundColor:color1,width:"35%",height:"60px",borderRadius:"50%"}} onClick={changeColorRed}></div>
      <div style={{backgroundColor:color2,width:"35%",height:"60px",borderRadius:"50%"}} onClick={changeColorOrange}></div>
      <div style={{backgroundColor:color3,width:"35%",height:"60px",borderRadius:"50%"}} onClick={changeColorGreen}></div>
      </div>
      </div> */}

<div className='traffic-light'>
      <div className={`light red ${light === 'red'? 'active': ''}`}></div>
      <div className={`light yellow ${light === 'yellow'? 'active': ''}`}></div>
      <div className={`light green ${light === 'green'? 'active': ''}`}></div>
    </div>
   </>
  )
}
