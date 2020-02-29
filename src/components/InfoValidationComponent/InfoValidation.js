import React from "react";
import "./InfoValidation.css";
import Title from "../TitleComponent/Title";
import {Button, Input} from "reactstrap";
import useForm from "../../shared/useForm";
import validate from "../../shared/validate-form";

const InfoValidation = ({headerText,phoneLabel,emailLabel,passLabel,submitBtnLabel}) => {

    const onSubmit = () => {
        console.log("SUBMITTED");
        console.log(values)
    };

    const {
        values,
        errors,
        handleChange,
        handleSubmit,
    } = useForm(onSubmit, validate);

    return (
        <>
        <Title cssClassName={"section-header center"}>{headerText}</Title>
            <div className="info-validation-wrapper">
                <div className="form-item">
                    <Input
                        type="text"
                        name="number"
                        id="Number"
                        placeholder={phoneLabel}
                        className="input-box"
                        value={values.number || ''}
                        onChange={handleChange}
                        required
                    />
                    {errors.number && (
                        <p className="form-error">{errors.number}</p>
                    )}
                </div>
                <div className="form-item">
                    <Input
                        type="email"
                        name="email"
                        id="Email"
                        placeholder={emailLabel}
                        className="input-box"
                        value={values.email || ''}
                        onChange={handleChange}
                        required
                    />
                    {errors.email && (
                        <p className="form-error">{errors.email}</p>
                    )}
                </div>
                <div className="form-item">
                    <Input
                        type="password"
                        name="password"
                        id="examplePassword"
                        placeholder={passLabel}
                        className="input-box"
                        value={values.password || ''}
                        onChange={handleChange}
                        required
                    />
                    {errors.password && (
                        <p className="form-error">{errors.password}</p>
                    )}
                </div>

                <Button className="submit-btn" onClick={handleSubmit}>
                    {submitBtnLabel}
                </Button>

            </div>
        </>
    );
};

export default InfoValidation;
