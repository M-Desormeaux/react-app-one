import React from "react";
import styled from "styled-components";

export const Container = styled.div`
    padding: 1rem;
    margin-bottom: 1rem;
    border: 1px solid black;
    border-radius: 0.5rem;

    display: flex;
    justify-content: space-between;

    &:last-child {
        margin: 0;
    }

    p {
        display: inline-block;
        padding: 2rem;
        margin: 0;
    }

    div {
        padding: 0 2rem;
        flex: 1;
    }
`;

export const ExpenseItem = () => {
    return (
        <Container>
            <p>Date</p>
            <div>
                <p>Expense Item</p>
            </div>
            <p>Amount</p>
        </Container>
    );
};
