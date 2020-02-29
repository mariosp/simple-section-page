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
                        <CompanyServices headerText={panelData.graphText} stats={panelData.stats}/>
                    </div>
                    <div className="col-md-6">
                        <InfoValidation
                            headerText={panelData.formText}
                            phoneLabel={panelData.formLabels[0]}
                            emailLabel={panelData.formLabels[1]}
                            passLabel={panelData.formLabels[2]}
                            submitBtnLabel={panelData.buttonText}
                        />
                    </div>
                </div>
            </>
        )

};

export default SectionPanel;
