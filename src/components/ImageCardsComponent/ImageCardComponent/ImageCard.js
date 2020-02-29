import React from "react";
import "./ImageCard.css";
const viewIcon = "assets/icons/view.png";

const ImageCard = ({image})=>{
    return(
            <div className="image-card">
                <img src={image.img} alt={image.title} className="image"/>
                <div className="image-caption">
                    <img src={viewIcon} className="icon-caption" alt={"view icon"}/>
                    <div className="text-caption">{image.title}</div>
                    <hr className="line-caption"/>
                </div>
            </div>
    );
};

export default ImageCard;
