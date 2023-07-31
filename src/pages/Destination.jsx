import React from "react";
import '../style/pagesStyle/Destination.css'
import { Link, Outlet } from "react-router-dom";


const Destination = () =>{

    return(
        <div className="destination">
            <div className="headDestination">
            <h1 ><span id="destinationSpan">01</span> PICK YOUR DESTINATION</h1>
            <ul id="navDestination">
                <li id="cardListDes">
                    <Link to='moon' id="listDestination">MOON</Link>
                    <Link to='mars'id="listDestination">MARS</Link>
                    <Link to='europa'id="listDestination">EUROPA</Link>
                    <Link to='titan'id="listDestination">TITAN</Link>
                </li>
            </ul>
            </div>

            <Outlet/>
        </div>
    )
}

export default Destination