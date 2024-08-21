import React from 'react'
import Hero from '../assets/bgremove.png'

const landing = () => {
  return (
   <>
   <div style={{marginLeft:"5%", marginTop:"7%"}}>
    <p style={{color:"#e3e3e3"}}>-free 30days trial</p>
    <h1 style={{lineHeight:"4rem", fontSize:"400%", fontWeight:"bold", margin:"2% 0"}}>The best way<br/> to showcase<br/> your project </h1>
    <h4>Here you can put your short description about your project</h4>
    <div style={{marginTop:"2%"}}>
    <button style={{backgroundColor:"blue", color:"whitesmoke", borderRadius:"4px", padding:"8px 18px", marginRight:"3%"}}>Try for free</button>
    <button style={{backgroundColor:"whitesmoke", color:"black",borderRadius:"4px",padding:"8px 26px", }}>See how it works</button>
    </div>
   </div>
   <div style={{position:"absolute", left:"45%", top:"15%"}}>
        <img src={Hero} alt="" />
   </div>
   </>
  )
}

export default landing
