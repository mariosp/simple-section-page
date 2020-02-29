import React from "react";
import "./ProgressBar.css";

const ProgressBar = ({index,amount}) =>{
    return(
        <div className="wrapper">
            <div className="progress-bar-box"></div>
            <img src={`assets/icons/${index}.png`} className="icon" style={{left: `${amount/10}%`}} alt={"icon"}/>
        </div>
    )
};

export default ProgressBar;
