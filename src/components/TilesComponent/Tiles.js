import React from "react";
import "./Tiles.css";
import Tile from "./TileComponent/Tile";

const Tiles = ({tiles})=>{
    console.log(tiles)

    const renderTiles = tiles.map((tile,index)=>{
        return (
            <div key={index} className="col-md-4 tile">
                <Tile tile={tile}/>
            </div>
        )
    });
    return(
        <>
        <div className="row tiles-wrapper">
            {renderTiles}
        </div>
        </>
    );
};

export default Tiles;
