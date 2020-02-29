import React from "react";
import "./CompanyServices.css";
import Title from "../TitleComponent/Title";
import ProgressBar from "../ProgressBarComponent/ProgressBar";

const CompanyServices = ({headerText, stats}) => {

    const renderProgressBars = stats.map((stat, index) =>{
        return(
                <div key={index} className="stat-div">
                    <div className="stat-header">
                        <div className="stat-title">{stat.title}</div>
                        <div className="stat-amount">{stat.amount /10} %</div>
                    </div>
                    <ProgressBar index={index+1} amount={stat.amount}/>
                </div>
        )
    });
    return(
        <>
            <Title cssClassName={"section-header"}>{headerText}</Title>
            <div className="company-services-wrapper">
                {renderProgressBars}
            </div>
        </>
    );
};

export default CompanyServices;
