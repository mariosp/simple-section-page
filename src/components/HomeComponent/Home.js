import React, {useEffect, useState} from "react";
import "./Home.css"
import Title from "../TitleComponent/Title";
import {Spinner} from "reactstrap";
import SectionBar from "../SectionBarComponent/SectionBar";

const Home = () => {
    const [sections, setSections] = useState(null);
    const [selectedSection, setSelectedSection] = useState(0);
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

    const handlerOnSectionchange = (section) => {
        setSelectedSection(section);
    };

    return sections?
        (
           <div className="container home-wrapper">
               <Title title={sections.description} />
               <SectionBar selected={selectedSection} onSectionChange={handlerOnSectionchange}/>
           </div>
        )
        :
        <div className="home-loader-wrapper">
            <Spinner style={{ width: '3rem', height: '3rem' }} type="grow" color="primary" />
        </div>
};

export default Home;
