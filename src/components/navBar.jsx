import React from 'react'
import { Link } from 'react-router-dom'

export default function navBar() {
  return (
    <>
      <div className="w3-bar w3-blue">
  <Link to={"./"} className="w3-bar-item w3-button">Home</Link>
  <Link to={'./trafficlight'} className="w3-bar-item w3-button">Trafficlight</Link>
  <Link to={'./exercises'} className="w3-bar-item w3-button">Exercise</Link>
  <Link to={'./contact'} className="w3-bar-item w3-button">Contact-Me</Link>
</div>
    </>
  )
}
