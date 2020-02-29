import React from "react";
import "./ImageCard.css";

const ImageCard = ({image})=>{

    return(
        <div className="image-card">
            <img src={image.img} alt={image.title} className="image"/>
            <div className="image-caption">
                <p>test</p>
            </div>
        </div>
    );
};

export default ImageCard;
