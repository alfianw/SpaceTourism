import React from "react"
import '../style/componentStyle/Navbar.css'
import logo from '../assets/shared/logo.svg'
const Navbar =()=>{
    return(
        <nav>
            <img src={logo} alt="" />
            <div className="line"></div>
            <div className="navbar-card">
                <ul id="navbar-list">
                    <li id="list"><a href=""><span>01</span>HOME</a></li>
                    <li id="list"><a href=""><span>02</span>DESTINATION</a></li>
                    <li id="list"><a href=""><span>03</span>CREW</a></li>
                    <li id="list"><a href=""><span>04</span>TECNOLOGI</a></li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar