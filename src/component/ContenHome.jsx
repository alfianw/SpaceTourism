import React from "react";
import '../style/componentStyle/ContenHome.css'
import { useNavigate } from "react-router-dom";

const ContenHome = () =>{
    const navigate = useNavigate()
    return(
        <div className="contenHome">
            <article id="articleHome">
                <h2>SO, YOU WANT TO TRAVEL TO</h2>
                <h1>SPACE</h1>
                <p>Les't face it; if you want to go to space you might as well genuinely go to outer space and not hover kind of on the adge of it. Well sit back and relax because we'll give you a truly out of this world experience!</p>
            </article>
            <button id="btnExplore" onClick={() => navigate('destination/moon')}>EXPLORES</button>
        </div>
    )
}

export default ContenHome