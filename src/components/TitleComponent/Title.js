import React from "react";
import "./Title.css"

const Title = ({children, cssClassName})=> {
    return(
        <div className={cssClassName}>{children}</div>
    );
};

export default Title;
