import { useState, React } from "react";
import '../style/pagesStyle/Destination.css'
import { Link, Outlet } from "react-router-dom";


const Destination = () => {
    const [activePage, setActivePage] = useState('');

    const handleSetActive = (page) => {
        setActivePage(page);
    };
    return (
        <div className="destination">
            <div className="headDestination">
                <h1 ><span id="destinationSpan">01</span> PICK YOUR DESTINATION</h1>
                <ul id="navDestination">
                    <li id="cardListDes">
                        <Link to='moon' id="listDestination"
                            className={activePage === 'moon' ? 'active' : ''}
                            onClick={() => handleSetActive('moon')}>MOON</Link>
                        <Link to='mars' id="listDestination"
                            className={activePage === 'mars' ? 'active' : ''}
                            onClick={() => handleSetActive('mars')}>MARS</Link>
                        <Link to='europa' id="listDestination"
                            className={activePage === 'europa' ? 'active' : ''}
                            onClick={() => handleSetActive('europa')}>EUROPA</Link>
                        <Link to='titan' id="listDestination"
                            className={activePage === 'titan' ? 'active' : ''}
                            onClick={() => handleSetActive('titan')}>TITAN</Link>
                    </li>
                </ul>
            </div>

            <Outlet />
        </div>
    )
}

export default Destination