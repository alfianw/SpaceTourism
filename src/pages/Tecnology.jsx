import React from "react";
import '../style/pagesStyle/Tecnology.css'
import { Link, Outlet } from "react-router-dom";

const Tecnology = () => {
    return (
        <div className="tecnology">
            <h1><span>03</span> SPACE LAUNCH 101</h1>
            <div className="warpTecnology">
                <div className="navTecnology">
                    <Link to='vehicle' id="listTecnology">1</Link>
                    <Link to='port' id="listTecnology">2</Link>
                    <Link to='capsul' id="listTecnology">3</Link>
                </div>
                <Outlet />
            </div>
        </div>
    )
}

export default Tecnology