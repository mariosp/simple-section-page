import React from "react";
import "./SectionBar.css";

const SectionBar = ({selected, onSectionChange}) => {
    return (
        <div className="section-bar-wrapper">
            <div>
                <div className="section-button" onClick={()=> onSectionChange(0)}>Section 1</div>
                <div className="selection-bullet" hidden={!!selected}></div>
            </div>
            <div>
                <div className="section-button pr-0" onClick={()=> onSectionChange(1)}>Section 2</div>
                <div className="selection-bullet" hidden={!selected}></div>
            </div>
        </div>
    );
};

export default SectionBar;
