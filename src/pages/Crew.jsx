import React from "react";
import '../style/pagesStyle/Crew.css'
import { Link, Outlet } from "react-router-dom";

const Crew = () => {
    return (
        <div className="crew">
            <div className="contenCrew">
                <h1><span>03 </span>MEET YOUR CREW</h1>
                <Outlet />
                <ul id="navCrew">
                    <li id="cardListCrew">
                        <Link to='crew1' id="listCrew"></Link>
                        <Link to='crew2' id="listCrew"></Link>
                        <Link to='crew3' id="listCrew"></Link>
                        <Link to='crew4' id="listCrew"></Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Crew