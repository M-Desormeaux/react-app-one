import React from "react";
import styled from "styled-components";

const Container = styled.div`
    padding: 1rem;
    margin-bottom: 1rem;
    border: 1px solid black;
    border-radius: 0.5rem;
    background: #39a6a3;

    display: flex;
    justify-content: space-between;
    align-items: center;

    &:hover {
        background: #178481;
    }

    &:hover * {
        background: #39a6a3;
    }

    &:last-child {
        margin: 0;
    }
`;

export const ExpenseData = styled(Container)`
    width: calc(justify-content+1rem);
    margin: 0;

    justify-content: center;
    align-items: center;
`;

const Description = styled(ExpenseData)`
    width: calc(100%);
    margin: 0 1rem;
`;

export const ExpenseItem = () => {
    return (
        <Container>
            <ExpenseData>Date</ExpenseData>
            <Description>Expense Item</Description>
            <ExpenseData>Amount</ExpenseData>
        </Container>
    );
};
