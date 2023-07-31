import React from "react"
import '../style/componentStyle/Navbar.css'
import logo from '../assets/shared/logo.svg'
import { useNavigate } from "react-router-dom";

const Navbar = () => {
    const navigate = useNavigate()
    return (
        <nav>
            <img src={logo} alt="" />
            <div className="line"></div>
            <div className="navbar-card">
                <ul id="navbar-list">
                    <li id="list"><h1 onClick={() => navigate('/')}><span id="navSpan">01</span> HOME</h1></li>
                    <li id="list"><h1 onClick={() => navigate('destination/moon')}><span id="navSpan">02</span> DESTINATION</h1></li>
                    <li id="list"><h1 onClick={() => navigate('crew/crew1')}><span id="navSpan">03</span> CREW</h1></li>
                    <li id="list"><h1 onClick={() => navigate('/tecnology')}><span id="navSpan">04</span> TECNOLOGY</h1></li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar