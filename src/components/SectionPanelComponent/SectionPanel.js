import React from "react";
import ImageCards from "../ImageCardsComponent/ImageCards";

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
                <h1>test 2</h1>
            </>
        )

};

export default SectionPanel;
