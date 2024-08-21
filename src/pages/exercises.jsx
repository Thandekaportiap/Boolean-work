import React from 'react'
import Image from '../assets/image.jpg'
import Happy from '../assets/happy.webp'

export default function Exercises() {
  return (
    <div style={{position:"relative", width:"100%",height:"50%"}}>
      <img src={Happy} alt=""  style={{width:"100%", height:"40vh"}} />
      <div style={{position:"absolute", top:"30%", left:"50%"}}><h1 style={{fontWeight:"bold", fontSize:"800"}}>Exersises</h1></div>
    </div>
  )
}
