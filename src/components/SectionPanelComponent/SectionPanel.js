import React from "react";
import "./SectionPanel.css"
import ImageCards from "../ImageCardsComponent/ImageCards";
import CompanyServices from "../CompanyServicesComponent/CompanyServices";
import Title from "../TitleComponent/Title";
import InfoValidation from "../InfoValidationComponent/InfoValidation";

const SectionPanel = ({panelData}) => {
    const sectionId = panelData.id;
    return sectionId === "01" ?
        (
            <>
                <ImageCards images={panelData.images} />
            </>
        )
        :
        (
            <>
                    <Title cssClassName={"section-title"}>{panelData.title}</Title>
                <div className="section-2-wrapper row">
                    <div className="col-md-6">
                        <CompanyServices headerText={panelData.graphText}/>
                    </div>
                    <div className="col-md-6">
                        <InfoValidation headerText={panelData.formText}/>
                    </div>
                </div>
            </>
        )

};

export default SectionPanel;
