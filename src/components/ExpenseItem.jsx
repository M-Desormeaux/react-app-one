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
    min-width: 100px;
    height: 100%;
    background: #39a6a3;
    margin: 0;
    text-align: center;

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
    const month = date.toLocaleDateString("en-US", { month: "short" });
    const day = date.toLocaleDateString("en-US", { day: "2-digit" });
    const year = date.toLocaleDateString("en-US", { year: "numeric" });
    console.log(date);

    return (
        <Container>
            <ExpenseData>
                <>
                    <>
                        {month}, {day}
                    </>
                    <br />
                    <>{year}</>
                </>
            </ExpenseData>
            <Description>{props.title}</Description>
            <ExpenseData>${props.amount}</ExpenseData>
        </Container>
    );
};
