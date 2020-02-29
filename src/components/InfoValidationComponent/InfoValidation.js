import React from "react";
import "./InfoValidation.css";
import Title from "../TitleComponent/Title";

const InfoValidation = ({headerText}) => {

    return (
        <Title cssClassName={"section-header center"}>{headerText}</Title>
    );
};

export default InfoValidation;
