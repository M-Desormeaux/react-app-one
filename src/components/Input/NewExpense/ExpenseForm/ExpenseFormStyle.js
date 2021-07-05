import styled from "styled-components";

export const ExpenseFormContainer = styled.div`
    padding: 1rem;
    margin-bottom: 1rem;
    border-radius: 0.5rem;
    background: #3b6978;
`;

export const Controls = styled.div`
    padding: 1rem;
    border-radius: 0.5rem;
    background: #84a9ac;

    display: flex;
    justify-content: center;

    @media screen and (max-width: 750px) {
        flex-direction: column;
    }
`;

export const ControlGroup = styled.div`
    position: relative;
    padding: 1rem;
    border-radius: 0.5rem;
    background: #e4e3e3;
    margin: 0 0.5rem;

    display: flex;
    flex-direction: column;
    justify-content: center;

    @media screen and (max-width: 750px) {
        margin-bottom: 1rem;
    }
`;

export const ControlLabel = styled.div`
    position: absolute;
    padding: 0 0.25rem;
    top: 0.5rem;
    left: 23px;
    z-index: 1;
    background: #e4e3e3;

    /* &:after {
        content: " ";
        position: absolute;
        left: 0;
        bottom: 0;
        z-index: -1;
        background: #e4e3e3;
    } */
`;

export const ControlInput = styled.input`
    border-radius: 0.5rem;
    border: 1px solid #204051;
    padding: 0.5rem;
    background: #e4e3e3;
    height: 2.5rem;
    width: 150px;
`;

export const ControlButton = styled.button`
    padding: 1rem;
    border-radius: 0.5rem;
    background: #e4e3e3;
    margin: 0 0.5rem;
    border: 0;
    font-weight: bold;
`;
