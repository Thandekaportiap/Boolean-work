import React from 'react'
import { useState } from 'react';

const card2 = ({card}) => {
    const [number, setNumber] = useState('');
    const [result, setResult] = useState('');
  
    const checkNumber = () => {
      const isEven = number % 2 === 0;
      setResult(isEven ? 'Even' : 'Odd');}
    
  return (
    <div>
      <div className="w3-container" style={{ display:"flex", flexDirection:"column", borderRadius:"4px"}}>
  <h2>What is the {card.title} number?</h2>
  Num1
    <input type="number" value={number} onChange={(e) => setNumber(e.target.value)} />

  
  <button style={{margin:"5% 0"}} onClick={checkNumber}>{card.button}</button>
</div>

<footer className="w3-container" style={{background:"lightblue", }}>
  <h5>Output: The {card.out} number is  {result}</h5>
</footer>
    </div>
  )
}

export default card2
