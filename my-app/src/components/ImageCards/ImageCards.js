import React from "react";
import "./ImageCards.css";

const ImageCards = props => (
    <div className="card" onClick={props.imageClicked}>
        <div className="img-container">
            <img alt={props.image.replace(".jpg", "")} src={ props.image} />
        </div>
    </div>
);

export default ImageCards;