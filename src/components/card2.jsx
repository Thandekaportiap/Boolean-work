import React from 'react'

const card2 = ({card}) => {
    
  return (
    <div>
      <div className="w3-container" style={{ display:"flex", flexDirection:"column", borderRadius:"4px"}}>
  <h2>What is the {card.title} number?</h2>
  Num1
    <input type="text"  />

  
  <button style={{margin:"5% 0"}}>{card.button}</button>
</div>

<footer className="w3-container" style={{background:"lightblue", }}>
  <h5>Output: The {card.out} number is <hr style={{width:"8%", color:"black"}}/> </h5>
</footer>
    </div>
  )
}

export default card2
