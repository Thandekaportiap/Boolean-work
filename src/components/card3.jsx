import React from 'react'
import { useState } from 'react';

const card3 = ({card}) => {
    const [number, setNumber] = useState("");
  const [result, setResult] = useState("");

  const checkDayOfWeek = () => {
    const dayOfWeek = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday","Sunday"];

    // Check if the input is a valid number
    if (!isNaN(number) && number >= 1 && number <= 7) {
      setResult(dayOfWeek[number - 1]); // Subtract 1 to get the correct index
    } else {
      setResult("Invalid input. Please enter a number between 1 and 7.");
    }
  };

  return (
    <div>
      <div className="w3-container" style={{ display:"flex", flexDirection:"column", borderRadius:"4px"}}>
  <h2>Which day of the week is Number</h2>
  Num
    <input type="text" value={number}
        onChange={(e) => setNumber(e.target.value)} />

  
  <button onClick={checkDayOfWeek} style={{margin:"5% 0"}}>{card.button}</button>
</div>

<footer className="w3-container" style={{background:"lightblue", }}>
  <h5>Output: is {result}</h5>
</footer>
    </div>
  )
}

export default card3