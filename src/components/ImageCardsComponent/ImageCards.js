import React from "react";
import "./ImageCards.css"
import ImageCard from "./ImageCardComponent/ImageCard";
import {Col, Row} from "reactstrap";

const ImageCards = ({images}) => {

    const renderImageCards = images.map((image, index) =>
        <div className="image-card">
            <ImageCard image={image} key={index} index={index}/>
        </div>);

    return (
        <div className="row image-cards">
            <div className="col-md-4">
                {renderImageCards[0]}
            </div>
            <div className="col-md-4">
                {renderImageCards[1]}
                {renderImageCards[2]}
            </div>
            <div className="col-md-4">
                {renderImageCards[3]}
                {renderImageCards[4]}
            </div>
        </div>
    );
};

export default ImageCards;
