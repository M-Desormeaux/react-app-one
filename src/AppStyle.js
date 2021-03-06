import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
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
        width: 100%;
    }

    h1,h2,h3,h4,h5,h6 {
        padding: 0;
        margin: 0;}
`;

export const AppWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background: #4c4c6d;
    color: #204051;
    font-family: sans-serif;
`;

export const AppContainer = styled.div`
    padding: 0.5rem 0;
    width: 100%;
    max-width: 1200px;
    min-width: 0;
    min-height: 100vh;
`;
