
import React, { useState } from 'react';

export default function TrafficLight() {
   const [color1, setColor1 ] = useState("black")
   const [color2, setColor2 ] = useState("black")
   const [color3, setColor3 ] = useState("black")
  

    const changeColorRed = (e) => {
        setColor1( "red" )
    };
    const changeColorOrange = (e) => {
      setColor2( "orange" )

  };const changeColorGreen = (e) => {
    setColor3( "green" )
};
 

  return (
   <>
   <div style={{ display:"flex", flexDirection:"column",justifyContent:"center", alignItems:"center"}}>
    <div style={{backgroundColor:"#747E8B",width:"12%",height:"200px",marginTop:"20%" ,display:"flex", flexDirection:"column",justifyContent:"center", alignItems:"center"}}>
      <div style={{backgroundColor:color1,width:"35%",height:"60px",borderRadius:"50%"}} onClick={changeColorRed}></div>
      <div style={{backgroundColor:color2,width:"35%",height:"60px",borderRadius:"50%"}} onClick={changeColorOrange}></div>
      <div style={{backgroundColor:color3,width:"35%",height:"60px",borderRadius:"50%"}} onClick={changeColorGreen}></div>
      </div>
      </div>
   </>
  )
}
