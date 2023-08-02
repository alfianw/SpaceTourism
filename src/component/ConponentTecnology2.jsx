import React from "react";
import '../style/componentStyle/ComponentTecnology.css'

const ComponentTecnology2 = (props) =>{
    const {data} =props
    const tecno = data[1]
    return(
        <div className="cardTecnology">
            <div className="articleTecno">
                <h3>THE TERMINOLOGY…</h3>
                <h1>{tecno.name}</h1>
                <p>{tecno.description}</p>
            </div>
            <img src={tecno.images.portrait} alt="" id="imgTecnology" />
        </div>
    )
}

export default ComponentTecnology2;