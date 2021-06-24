import React from "react";
import styled from "styled-components";
import { ExpenseData } from "./ExpenseItem";

const TitleContainer = styled(ExpenseData)`
    text-align: center;
    margin-bottom: 1rem;

    &:hover {
        background: #39a6a3;
    }

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
