import React from "react";
import { TitleContainer } from "./PageTitleStyle";

export const PageTitle = (props) => {
    return (
        <TitleContainer>
            <h2>{props.title}</h2>
        </TitleContainer>
    );
};
