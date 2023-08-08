import React from "react";
import '../style/componentStyle/ComponentTecnology.css'
import capsule from '../assets/technology/image-space-capsule-portrait.jpg'

const ComponentTecnology3 = (props) =>{
    const {data} =props
    const tecno = data[2]
    return(
        <div className="cardTecnology">
            <div className="articleTecno">
                <h3>THE TERMINOLOGY…</h3>
                <h1>{tecno.name}</h1>
                <p>{tecno.description}</p>
            </div>
            <img src={capsule} alt="" id="imgTecnology" />
        </div>
    )
}

export default ComponentTecnology3;