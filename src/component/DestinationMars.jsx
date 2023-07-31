import React from "react";
import '../style/componentStyle/ContenDestination.css'

const DestinationMars = (props) => {
    const { data } = props
    const destination = data[1]

    return (
        <div className="cardDestination">
            <img src={destination.images.png} alt="" id="imgDes" />
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

export default DestinationMars