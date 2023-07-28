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
                    <li id="list"><h1 onClick={() => navigate('/')}><span>01</span> HOME</h1></li>
                    <li id="list"><h1 onClick={() => navigate('destination/moon')}><span>02</span> DESTINATION</h1></li>
                    <li id="list"><h1 onClick={() => navigate('/')}><span>02</span> DESTINATION</h1></li>
                    <li id="list"><h1 onClick={() => navigate('/destination')}><span>02</span> DESTINATION</h1></li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar