import React from "react";
import styled from "styled-components";

const Container = styled.div`
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
    width: calc(justify-content+1rem);
    background: #39a6a3;
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
