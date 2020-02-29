import React, {useState} from "react";
import "./Section.css"
import SectionBar from "../SectionBarComponent/SectionBar";
import SectionPanel from "../SectionPanelComponent/SectionPanel";

const Section = ({sectionData}) => {
    const [selectedSection, setSelectedSection] = useState(0);
    const section = sectionData[selectedSection];

    const handlerOnSectionchange = (section) => {
        setSelectedSection(section);
    };
    return(
        <>
           <SectionBar selected={selectedSection} onSectionChange={handlerOnSectionchange}/>
           <SectionPanel panelData={section} />
        </>
    );
};

export default Section;
