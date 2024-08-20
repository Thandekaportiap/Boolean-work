import React from 'react'
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from './pages/layout'
import Home from './pages/Home'
import NoPage from './pages/noPage'
import TrafficLight from './pages/trafficLight'
import Exercises from './pages/exercises';



export default function App() {
  return (
    <>
     <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="trafficlight" element={<TrafficLight />} />
          <Route path="exercises" element={<Exercises />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
    </>
  )
}
