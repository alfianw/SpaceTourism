import {React, useState} from "react";
import '../style/pagesStyle/Crew.css'
import { Link, Outlet } from "react-router-dom";

const Crew = () => {
    const [activePage, setActivePage] = useState('');

    const handleSetActive = (page) => {
        setActivePage(page);
    };
    return (
        <div className="crew">
            <div className="contenCrew">
                <h1><span>03 </span>MEET YOUR CREW</h1>
                <Outlet />
                <ul id="navCrew">
                    <li id="cardListCrew">
                        <Link to='crew1' id="listCrew"
                        className={activePage === '1' ? 'active' : ''}
                        onClick={() => handleSetActive('1')}
                        ></Link>
                        <Link to='crew2' id="listCrew"
                        className={activePage === '2' ? 'active' : ''}
                        onClick={() => handleSetActive('2')}
                        ></Link>
                        <Link to='crew3' id="listCrew"
                        className={activePage === '3' ? 'active' : ''}
                        onClick={() => handleSetActive('3')}
                        ></Link>
                        <Link to='crew4' id="listCrew"
                        className={activePage === '4' ? 'active' : ''}
                        onClick={() => handleSetActive('4')}
                        ></Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Crew