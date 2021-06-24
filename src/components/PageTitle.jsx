import React from "react";
import styled from "styled-components";
import { Container } from "./ExpenseItem";

const TitleContainer = styled(Container)`
    text-align: center;

    h1 {
        width: 100%;
    }
`;

export const PageTitle = () => {
    return (
        <TitleContainer>
            <h1>Insert your code 💕</h1>
        </TitleContainer>
    );
};
