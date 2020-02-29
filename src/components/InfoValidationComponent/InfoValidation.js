import React from "react";
import "./InfoValidation.css";
import Title from "../TitleComponent/Title";
import {Button, Input} from "reactstrap";

const InfoValidation = ({headerText,phoneLabel,emailLabel,passLabel,submitBtnLabel}) => {

    return (
        <>
        <Title cssClassName={"section-header center"}>{headerText}</Title>
            <div className="info-validation-wrapper">
                <Input
                    type="number"
                    name="number"
                    id="Email"
                    placeholder={phoneLabel}
                    className="input-box"
                />
                <Input
                    type="email"
                    name="email"
                    id="Email"
                    placeholder={emailLabel}
                    className="input-box"
                />
                <Input
                    type="password"
                    name="password"
                    id="examplePassword"
                    placeholder={passLabel}
                    className="input-box"
                />

                <Button className="submit-btn">
                    {submitBtnLabel}
                </Button>

            </div>
        </>
    );
};

export default InfoValidation;
