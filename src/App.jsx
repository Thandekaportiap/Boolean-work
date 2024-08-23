import React from 'react'
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from './pages/layout'
import Home from './pages/Home'
import NoPage from './pages/noPage'
import TrafficLight from './pages/trafficLight'
import Exercises from './pages/exercises';
import Contact from './pages/contact';
import Landing from './pages/landing';
import Movie from './pages/movie';
import Movies from './assets/movies';
import MoviesPage from './pages/moviesPage';



export default function App() {
  return (
    <>
     <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Landing />} />
          <Route path="Home" element={<Home />} />
          <Route path="trafficlight" element={<TrafficLight />} />
          <Route path="exercises" element={<Exercises />} />
          <Route path="contact" element={<Contact />} />
          <Route path="movie"  >
            <Route index element={<Movie mData={Movies}/>}/>
            <Route path=":id" element={<MoviesPage data={Movies} />}/>
          </Route>
          
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
    </>
  )
}
