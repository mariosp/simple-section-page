import React, {useEffect, useState} from "react";
import "./Home.css"
import Title from "../TitleComponent/Title";
import {Spinner} from "reactstrap";
import Section from "../SectionComponent/Section";

const Home = () => {
    const [sections, setSections] = useState(null);
    useEffect(() => {
        fetch(
            `https://voda-react-assessment.herokuapp.com/home`,
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
               <Section sectionData={sections.sections}/>
           </div>
        )
        :
        <div className="home-loader-wrapper">
            <Spinner style={{ width: '3rem', height: '3rem' }} type="grow" color="primary" />
        </div>
};

export default Home;
