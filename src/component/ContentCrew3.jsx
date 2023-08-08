import React from "react";
import '../style/componentStyle/ContentCrew.css'
import victor from '../assets/crew/image-victor-glover.png'

const ContentCrew3 = (props) =>{
    const {data} = props
    const crew = data[2]
    return(
        <div className="containerCrew">
            <div className="cardCrew">
                <h2>{crew.role}</h2>
                <h1>{crew.name}</h1>
                <h3>{crew.bio}</h3>
            </div>
            <img src={victor} alt="" id="imgCrew"/>
        </div>
    )
}

export default ContentCrew3;