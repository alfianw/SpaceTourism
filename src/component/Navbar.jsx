import { useState, React } from "react";
import '../style/componentStyle/Navbar.css'
import logo from '../assets/shared/logo.svg'
import { Link } from "react-router-dom";

const Navbar = () => {
    const [activePage, setActivePage] = useState('');

    const handleSetActive = (page) => {
        setActivePage(page);
    };
    return (
        <nav>
            <img src={logo} alt="" />
            <div className="line"></div>
            <div className="navbar-card">
                <ul id="navbar-list">
                    <li id="list"><Link to='/'
                        className={activePage === '/' ? 'active' : ''}
                        onClick={() => handleSetActive('/')}><span id="navSpan">01</span> HOME</Link></li>
                    <li id="list"><Link to='destination/moon'
                        className={activePage === 'moon' ? 'active' : ''}
                        onClick={() => handleSetActive('moon')}><span id="navSpan">02</span> DESTINATION</Link></li>
                    <li id="list"><Link to='crew/crew1'
                        className={activePage === 'crew' ? 'active' : ''}
                        onClick={() => handleSetActive('crew')}><span id="navSpan">03</span> CREW</Link></li>
                    <li id="list"><Link to='tecnology/vehicle'
                        className={activePage === 'tecnology' ? 'active' : ''}
                        onClick={() => handleSetActive('tecnology')}><span id="navSpan">04</span> TECNOLOGY</Link></li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar