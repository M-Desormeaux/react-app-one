import styled from "styled-components";

export const ExpenseDateContainer = styled.div`
    padding: 1rem 2rem;
    border-radius: 0.5rem;
    background: #e4e3e3;
    text-align: center;

    @media screen and (max-width: 450px) {
        display: flex;
        align-items: center;
    }
`;

export const ExpenseDay = styled.div`
    font-size: 1.1rem;
    @media screen and (max-width: 450px) {
        font-size: 1.2rem;
        font-weight: bold;
        margin: 0 0.5rem;
    }
`;

export const ExpenseMonth = styled.div`
    font-size: 1.2rem;
    font-weight: bold;
    @media screen and (max-width: 450px) {
        font-size: 1.2rem;
        font-weight: bold;
    }
`;

export const ExpenseYear = styled.div`
    font-weight: bold;
    @media screen and (max-width: 450px) {
        font-size: 1.2rem;
        font-weight: bold;
    }
`;
