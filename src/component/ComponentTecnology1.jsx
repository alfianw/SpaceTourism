import React from "react";
import '../style/componentStyle/ComponentTecnology.css'
import vehicle from '../assets/technology/image-launch-vehicle-portrait.jpg'

const ComponentTecnology1 = (props) =>{
    const {data} =props
    const tecno = data[0]
    return(
        <div className="cardTecnology">
            <div className="articleTecno">
                <h3>THE TERMINOLOGY…</h3>
                <h1>{tecno.name}</h1>
                <p>{tecno.description}</p>
            </div>
            <img src={vehicle} alt="" id="imgTecnology" />
        </div>
    )
}

export default ComponentTecnology1;