// eslint-disable-next-line no-unused-vars

import "./main.scss"
import React from 'react'
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import Search from './components/Search/Search';
import Support from './components/Support/Support';
import Info from './components/Info/Info';
import Lounge from './components/Lounge/Lounge';
import Travelers from './components/Travelers/Travelers';
import Subscribe from './components/Subscribers/Subscribe';
import Footer from './components/Footer/Footer';

import {Route , Routes} from 'react-router-dom'
import Flightselection from "./components/Flightbooking/flightselection";
const App = () => {
  return (
    <>
      {/* <Navbar />
      <Home />
      <Search/>
      <Support/>
      <Info/>
      <Lounge/>
      <Travelers/>
      <Subscribe/>
      <Footer/>  */}
      <Flightselection/>



</>
  )
}

export default App
