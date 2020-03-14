import React from "react";
import "./SectionBar.css";

const SectionBar = ({selected, onSectionChange, barItems=["Section 1", "Section 2"], topBar= false}) => {
    return (
        <div className={topBar?"section-bar-wrapper top-bar-wrapper": "section-bar-wrapper"}>
            <div>
                <div className={topBar? "section-button top-bar-button": "section-button"} onClick={()=> onSectionChange(0)}>{barItems[0]}</div>
                <div className={topBar? "selection-bullet top-bar-bullet" : "selection-bullet"} hidden={!!selected}></div>
            </div>
            <div>
                <div className={topBar? "section-button top-bar-button": "section-button pr-0"} onClick={()=> onSectionChange(1)}>{barItems[1]}</div>
                <div className={topBar? "selection-bullet top-bar-bullet" : "selection-bullet"} hidden={!selected}></div>
            </div>
            {topBar?
                (
                    <div style={{padding:"10px", marginLeft: "auto"}}>
                        <i className="fa fa-search icon-topbar"></i>
                    </div>
                ) : null
            }
        </div>
    );
};

export default SectionBar;
