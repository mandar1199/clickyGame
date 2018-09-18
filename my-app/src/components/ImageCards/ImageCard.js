import React from "react";
import "./ImageCard.css";

const ImageCards = props => (
    <div className="card" onClick={props.imageClicked}>
        <div className="img-container">
            <img alt={props.image.replace(".jpg", "")} src={require("../../images/" + props.image)} />
        </div>
    </div>
);

export default ImageCards;