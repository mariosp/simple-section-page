import React from "react";
import "./Tile.css";
import {Button, Card, CardBody, CardImg, CardText, CardTitle} from "reactstrap";

const Tile = ({tile}) => {
    return(
            <Card className="tile-card">
                <CardImg top width="100%" src={"assets/icons/"+ tile.icon + ".jpg"} alt={tile.title} className="tile-image" />
                <CardBody>
                    <CardTitle>{tile.title}</CardTitle>
                    <CardText>{tile.description}</CardText>
                    <Button className="button-card">{tile.link}</Button>
                </CardBody>
            </Card>
    );
};

export default Tile;
