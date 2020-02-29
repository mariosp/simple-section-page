import React from "react";
import "./CompanyServices.css";
import Title from "../TitleComponent/Title";

const CompanyServices = ({headerText}) => {
    return(
        <>
            <Title cssClassName={"section-header"}>{headerText}</Title>
            <div className="company-services-wrapper">
                
            </div>
        </>
    );
};

export default CompanyServices;
