import React from 'react'
import logo from './logo.png'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBars } from "@fortawesome/free-solid-svg-icons"
import { Link } from 'react-router-dom'
import Home from './Home'
import AboutMe from './AboutMe'

const NavBar = () => {
    return (
<nav className="navbar navbar-expand-lg navbar-light bg-dark">
    <div className="container">
  <a className="navbar-brand" href="#"><img className="logo" src={logo} alt="logo.." /></a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <FontAwesomeIcon icon={faBars} style={{ color: "white", cursor: "pointer" }}/>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav">
      <li className="nav-item active">
        <a className="nav-link" href={Home}>Home <span className="sr-only">(current)</span></a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href={AboutMe}>About Me</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Contact Me</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Blog</a>
      </li>
    </ul> 
  </div>
  </div>
</nav>
    )
}

export default NavBar
