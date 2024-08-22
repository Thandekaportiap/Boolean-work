import React from 'react'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Hero from '../assets/bgremove.png'
import Cartoon from '../assets/cartoon.png'

const landing = () => {
  const colors = ['lightgrey', 'baybpink', 'mayaBlue', 'lavender', 'darkcyan'];
  const [color, setColor] = useState('');

  useEffect(() => {
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    setColor(randomColor);
  }, []);

  return (
   <>
   <div style={{ backgroundColor: color, height:"100vh", width:"100%"}}>
   <div style={{marginLeft:"5%",display:"flex",flexDirection:"column", justifyContent:"center", alignItems:"flex-start"}}>
    <p style={{color:"#e3e3e3", marginTop:"6%"}}>-free 30days trial</p>
    <h1 style={{lineHeight:"4rem", fontSize:"400%", fontWeight:"bold",}}>The best way<br/> to showcase<br/> your project </h1>
    <h4>Here you can put your short description about your project</h4>
    <div style={{marginTop:"2%", display:"flex", flexDirection:"row"}}>
    <Link to={'./exercises'}> <button style={{backgroundColor:"blue", color:"whitesmoke", borderRadius:"4px", padding:"8px 18px", marginRight:"24px"}}>Exercises</button></Link>
    <Link to={'./contact'}><button style={{backgroundColor:"whitesmoke", color:"black",borderRadius:"4px",padding:"8px 26px", }}>Contact-Me</button></Link>
    </div>
   </div>
   <div style={{position:"absolute", left:"45%", top:"15%"}}>
        <img src={Hero} alt="cubes" />
   </div>
   <div style={{position:"absolute", right:"0%", bottom:"5%"}}>
    <img src={Cartoon} alt="cartoon" />
   </div>
   </div>
   {/* <button onClick = {
      () => click("yellow")
    }>Change BG Color</button> */}
   </>
  )
}

export default landing
