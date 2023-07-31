import React from "react";
import '../style/componentStyle/ContentCrew.css'

const ContentCrew2 = (props) =>{
    const {data} = props
    const crew = data[1]
    return(
        <div className="containerCrew">
            <div className="cardCrew">
                <h2>{crew.role}</h2>
                <h1>{crew.name}</h1>
                <h3>{crew.bio}</h3>
            </div>
            <img src={crew.images.webp} alt="" id="imgCrew"/>
        </div>
    )
}

export default ContentCrew2;