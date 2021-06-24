import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import { ExpenseItem } from './components/ExpenseItem';

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
        width: 100vw;
        height: 100vh;
    }
`;

const AppWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;

const AppContainer = styled.div`
    padding: 1rem;
    width: 80%;
    max-width: 1200px;
    min-width: 0;
    min-height: 100vh;
`;

export const App = () => {

    return (
        <AppWrapper>
            <AppContainer>
                <GlobalStyle />
                <h1>Insert your code 💕</h1>
                <ExpenseItem />
                <ExpenseItem />
                <ExpenseItem />
            </AppContainer>
        </AppWrapper>
    );
};