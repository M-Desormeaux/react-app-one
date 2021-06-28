import React from "react";
import { Container, Description, ExpenseData } from "./ExpenseItemStyle";

export const ExpenseItem = (props) => {
    const date = new Date(props.date);
    const month = date.toLocaleDateString("en-US", { month: "short" });
    const day = date.toLocaleDateString("en-US", { day: "2-digit" });
    const year = date.toLocaleDateString("en-US", { year: "numeric" });
    const amount = props.amount;
    console.log(amount);
    const cost = amount.toLocaleString("en-US", {
        style: "currency",
        currency: "USD",
    });
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
            <ExpenseData>{cost}</ExpenseData>
        </Container>
    );
};
