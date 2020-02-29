import React from "react";
import "./ProgressBar.css";

const ProgressBar = ({index}) =>{

    return(
        <div className="progress-bar-box">
            <img src={`${index}.png`}/>
        </div>
    )
};

export default ProgressBar;
