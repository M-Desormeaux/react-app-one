import React from "react";
import { TitleContainer } from "./PageTitleStyle";

export const PageTitle = (props) => {
    return (
        <TitleContainer>
            <h1>{props.title}</h1>
        </TitleContainer>
    );
};
