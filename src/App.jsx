import React from "react";
import styled, { createGlobalStyle } from "styled-components";
import { ExpenseItem } from "./components/ExpenseItem";
import { PageTitle } from "./components/PageTitle";

const GlobalStyle = createGlobalStyle`
    * {
        box-sizing: border-box;
    }
    :root {
        font-size: 16px;
    }
    html, body {
        padding: 0;
        margin: 0;
    }
    body {
        min-height: 100vh;
    }
`;

const AppWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background: #1a2634;
`;

const AppContainer = styled.div`
    padding: 1rem;
    width: 100%;
    max-width: 1200px;
    min-width: 0;
    min-height: 100vh;
`;

export const App = () => {
    return (
        <AppWrapper>
            <AppContainer>
                <GlobalStyle />
                <PageTitle title="Expense Tracker" />
                <ExpenseItem
                    title="Toilet Paper"
                    amount="94.12"
                    date="2020, 7, 14"
                />
                <ExpenseItem
                    title="New TV"
                    amount="799.49"
                    date="2021, 2, 12"
                />
                <ExpenseItem
                    title="Car Insurance"
                    amount="294.67"
                    date="2021, 2, 28"
                />
                <ExpenseItem
                    title="New Wood Desk"
                    amount="450.00"
                    date="2021, 5, 12"
                />
                <ExpenseItem
                    title="Microcenter"
                    amount="135.45"
                    date="2021, 6, 1"
                />
            </AppContainer>
        </AppWrapper>
    );
};
