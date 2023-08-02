import { useState, React } from "react";
import '../style/pagesStyle/Tecnology.css'
import { Link, Outlet } from "react-router-dom";

const Tecnology = () => {
    const [activePage, setActivePage] = useState('');

    const handleSetActive = (page) => {
        setActivePage(page);
    };

    return (
        <div className="tecnology">
            <h1><span id="spantec">03</span> SPACE LAUNCH 101</h1>
            <div className="warpTecnology">
                <div className="navTecnology">
                    <Link to='vehicle' id="listTecnology"
                    className={activePage === '1' ? 'active' : ''}
                    onClick={() => handleSetActive('1')}
                    >1</Link>
                    <Link to='port' id="listTecnology"
                    className={activePage === '2' ? 'active' : ''}
                    onClick={() => handleSetActive('2')}
                    >2</Link>
                    <Link to='capsul' id="listTecnology"
                    className={activePage === '3' ? 'active' : ''}
                    onClick={() => handleSetActive('3')}
                    >3</Link>
                </div>
                <Outlet />
            </div>
        </div>
    )
}

export default Tecnology