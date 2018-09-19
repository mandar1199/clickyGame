import React from "react";
import "./ImageCards.css";

const ImageCards = props => (
    <div className="card">
        <div className="img-container">
            <a onClick={() => props.imageClicked(props.Confused)}>
                <img alt={props.Confused} src={props.image} />
            </a>
        </div>
    </div>
);

export default ImageCards;