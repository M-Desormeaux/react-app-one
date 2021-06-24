import React from 'react';
import { createGlobalStyle } from 'styled-components';
import { ExpenseItem } from './components/ExpenseItem';

const GlobalStyle = createGlobalStyle`
    * {
        box-sizing: border-box;
    }
    :root {
        font-size: 16px;
    }
    html, body {
        width: 100vw;
        height: 100vh;
        padding: 0;
        margin: 0;
    }
`;

export const App = () => {

    return (
        <>
            <GlobalStyle />
            <h1>Insert your code 💕</h1>
            <ExpenseItem />
            <ExpenseItem />
            <ExpenseItem />
        </>
    );
};