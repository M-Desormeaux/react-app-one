import React from "react";
import { TitleContainer, TitleLayerTwo } from "./PageTitleStyle";

export const PageTitle = (props) => {
    return (
        <TitleContainer>
            <TitleLayerTwo>
                <h2>{props.title}</h2>
            </TitleLayerTwo>
        </TitleContainer>
    );
};
