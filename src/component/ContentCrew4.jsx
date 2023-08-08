import React from "react";
import '../style/componentStyle/ContentCrew.css'
import ansari from '../assets/crew/image-anousheh-ansari.png'

const ContentCrew4 = (props) =>{
    const {data} = props
    const crew = data[3]
    return(
        <div className="containerCrew">
            <div className="cardCrew">
                <h2>{crew.role}</h2>
                <h1>{crew.name}</h1>
                <h3>{crew.bio}</h3>
            </div>
            <img src={ansari} alt="" id="imgCrew"/>
        </div>
    )
}

export default ContentCrew4;