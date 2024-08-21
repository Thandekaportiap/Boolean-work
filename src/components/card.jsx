import React from 'react'
import { useState } from 'react';
const card = ({card}) => {

    const [num1, setNum1] = useState("");
    const [num2, setNum2] = useState("");
    const [biggestNumber, setBiggestNumber] = useState("");
  
    const handleNum1Change = (e) => {
      setNum1(e.target.value);
    };
  
    const handleNum2Change = (e) => {
      setNum2(e.target.value);
    };
  
    const findBiggestNumber = () => {
        if (num1 > num2) {
            setBiggestNumber(num1);
          } else if (num2 > num1) {
            setBiggestNumber(num2);
          } else {
            setBiggestNumber("Numbers are equal");
          }
        
    };
    
  return (
    <div>
      <div className="w3-container" style={{ display:"flex", flexDirection:"column", borderRadius:"4px"}}>
  <h2>What is the {card.title} number?</h2>
  Num1
    <input type="text"  value={num1} onChange={handleNum1Change}/>

  Num2
    <input type="text" value={num2} onChange={handleNum2Change} />
  
  <button onClick={findBiggestNumber} >{card.button}</button>
</div>

<footer className="w3-container" style={{background:"lightblue", }}>
  <h5>Output: The {card.out} number<br/> is {biggestNumber}</h5>
</footer>
    </div>
  )
}

export default card
