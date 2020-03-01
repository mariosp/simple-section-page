import React, {useEffect, useState} from "react";
import "./Page2.css";
import Title from "../TitleComponent/Title";
import Section from "../SectionComponent/Section";
import {Spinner} from "reactstrap";
import Tiles from "../TilesComponent/Tiles";

const Page2 = ()=>{
    const [sections, setSections] = useState(null);
    useEffect(() => {
        fetch(
            `https://voda-react-assessment.herokuapp.com/page`,
        )
            .then(res => res.json())
            .then(response => {
                setSections(response[0]);
                console.log(response)
            })
            .catch(error => console.log(error));
    }, []);

    return sections?
        (
            <div className="container home-wrapper">
                <Title cssClassName={"title"}>{sections.description}</Title>
                <Tiles tiles={sections.tiles} />
            </div>
        )
        :
        <div className="home-loader-wrapper">
            <Spinner style={{ width: '3rem', height: '3rem' }} type="grow" color="primary" />
        </div>
};

export default Page2;
