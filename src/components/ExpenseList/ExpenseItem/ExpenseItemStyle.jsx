import styled from "styled-components";

export const Container = styled.div`
    padding: 1rem;
    margin-bottom: 1rem;
    border: 1px solid #1a2634;
    border-radius: 3rem;
    background: #178481;

    display: flex;
    justify-content: space-between;
    align-items: center;

    &:hover,
    &:hover * {
        background: #359a97;
    }

    &:last-child {
        margin: 0;
    }
`;

export const ExpenseData = styled(Container)`
    min-width: 100px;
    height: 100%;
    background: #39a6a3;
    margin: 0;
    text-align: center;

    justify-content: center;
    align-items: center;
`;

export const Description = styled(ExpenseData)`
    width: calc(100%);
    padding-left: 1rem;
    margin: 0 1rem;
    justify-content: left;
`;
