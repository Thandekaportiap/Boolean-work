import React from 'react'
import Card from '../components/card'
import Card2 from '../components/card2'

export default function Exercises() {
  let card = [{
    title: "biggest",
    button: "calculate",
    out:"biggest"
  },
{
    title: "odd or even",
    button: "check", 
    out:"output"
}]

  return (
    <>
    <div style={{backgroundImage: `url(${require("../assets/happy.webp")})`,backgroundRepeat:"no-repeat", backgroundSize:"cover", width:"100%",height:"300px"}}>
      
      <div style={{position:"absolute", top:"30%", left:"40%"}}><h1 style={{fontWeight:"bold", fontSize:"800"}}>Exercises</h1></div>
    </div>
    <div style={{display:"flex",justifyContent:"center", alignItems:"center"}}>
<div className="w3-card-4"  style={{width:"40%", marginTop:"3%", marginLeft:"2%", background:"lightgrey",}}>
<Card card={card[0]}/>
</div>
<div className="w3-card-4"  style={{width:"40%",height:"270px", marginTop:"3%", marginLeft:"5%", background:"lightgrey",}}>
<Card2 card={card[1]}/>
</div>
</div>
</>
  )
}
