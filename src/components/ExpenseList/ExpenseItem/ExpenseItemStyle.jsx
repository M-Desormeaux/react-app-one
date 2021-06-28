import styled from "styled-components";

export const ExpenseItemContainer = styled.div`
    padding: 1rem;
    margin-bottom: 1rem;
    border-radius: 0.5rem;
    background: #84a9ac;

    display: flex;
    justify-content: space-between;
    align-items: center;

    &:hover,
    &:hover * {
        background: #1a2634;
    }

    &:hover * {
        background: #e4e3e3;
    }

    &:last-child {
        margin: 0;
    }
`;

export const ExpenseData = styled(ExpenseItemContainer)`
    min-width: 100px;
    height: 100%;
    background: #e4e3e3;
    margin: 0;
    text-align: center;

    justify-content: center;
    align-items: center;
`;

export const Description = styled(ExpenseData)`
    width: calc(100%);
    padding-left: 2rem;
    margin: 0 1rem;
    justify-content: left;
`;
