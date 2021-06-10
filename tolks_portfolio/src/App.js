import React from 'react'
import './App.css'
import "bootstrap/dist/css/bootstrap.min.css"
import NavBar from './components/NavBar'
import Home from './components/Home'
import Footer from './components/Footer'
import ContactMe from './components/ContactMe'
// import Blog from './components/Blog'
import {BrowserRouter as Router, Switch} from 'react-router-dom'
import  { Route } from 'react-router-dom'


function App() {
  return(
    <>
    <NavBar />
    <Home/>




    
    <Footer />
    </>
  )
}

export default App;
