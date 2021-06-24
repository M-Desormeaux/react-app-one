import React from "react";
import styled from "styled-components";

const Container = styled.div`
    padding: 1rem;
    margin-bottom: 1rem;
    border: 1px solid #1a2634;
    border-radius: 3rem;
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
    padding-left: 2rem;
    margin: 0 1rem;
    justify-content: left;
`;

export const ExpenseItem = (props) => {
    const date = new Date(props.date);

    console.log(date);

    return (
        <Container>
            <ExpenseData>{date.toLocaleDateString()}</ExpenseData>
            <Description>{props.title}</Description>
            <ExpenseData>${props.amount}</ExpenseData>
        </Container>
    );
};
