import React from 'react'
import {NoPages} from '../assets/nopage.jpg'

export default function NoPage() {
  return (
    <div>
      <h1>404 : Sorry page not found</h1>
      <img src={NoPages} alt="" />
    </div>
  )
}
