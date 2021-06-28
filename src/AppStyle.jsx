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
`;

export const AppWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background: #1a2634;
`;

export const AppContainer = styled.div`
    width: 100%;
    max-width: 1200px;
    min-width: 0;
    min-height: 100vh;
`;
