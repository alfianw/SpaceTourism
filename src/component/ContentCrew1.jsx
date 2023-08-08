import React from "react";
import '../style/componentStyle/ContentCrew.css'
import duglas from '../assets/crew/image-douglas-hurley.png'

const ContentCrew1 = (props) =>{
    const {data} = props
    const crew = data[0]
    return(
        <div className="containerCrew">
            <div className="cardCrew">
                <h2>{crew.role}</h2>
                <h1>{crew.name}</h1>
                <h3>{crew.bio}</h3>
            </div>
            <img src={duglas} alt="" id="imgCrew"/>
        </div>
    )
}

export default ContentCrew1;