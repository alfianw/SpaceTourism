import React from "react";
import '../style/componentStyle/ContenDestination.css'
import titan from '../assets/destination/image-titan.png'

const DestinationTitan = (props) => {
    const { data } = props
    const destination = data[3]

    return (
        <div className="cardDestination">
            <img src={titan} alt="" id="imgDes"/>
            <div className="articleDes">
                <h1>{destination.name}</h1>
                <p>{destination.description}</p>
                <div className="lineDes"></div>
                <div className="long">
                <div className="distance">
                        <h4>AVG. DISTANCE</h4>
                        <h3>{destination.distance}</h3>
                    </div>
                    <div className="distance">
                        <h4>EST. TRAVEL TIME</h4>
                        <h3>{destination.travel}</h3>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DestinationTitan