import React from "react";
import '../style/componentStyle/ContenDestination.css'
import moon from '../assets/destination/image-moon.png'

const DestinationMoon = (props) => {
    const { data } = props
    const destination = data[0]
    return (
        <div className="cardDestination">
            <img src={moon} alt="" id="imgDes"/>
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

export default DestinationMoon