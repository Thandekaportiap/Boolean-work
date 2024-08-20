import React from 'react'
import { Outlet} from "react-router-dom";
import NavBar from '../components/navBar';
import Footer from '../components/footer';

export default function Layout() {
  return (
    <>
   <NavBar/>
    <Outlet/>
    <Footer/>
    </>
  )
}
