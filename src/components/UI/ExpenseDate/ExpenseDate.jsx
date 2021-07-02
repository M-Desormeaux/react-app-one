import React from "react";
import {
    ExpenseDateContainer,
    ExpenseDay,
    ExpenseMonth,
    ExpenseYear,
} from "./ExpenseDateStyle";

export const ExpenseDate = (props) => {
    const date = new Date(props.date);
    const month = date.toLocaleDateString("en-US", { month: "short" });
    const day = date.toLocaleDateString("en-US", { day: "2-digit" });
    const year = date.toLocaleDateString("en-US", { year: "numeric" });

    return (
        <ExpenseDateContainer>
            <ExpenseMonth>{month}</ExpenseMonth>
            <ExpenseDay>{day}</ExpenseDay>
            <ExpenseYear>{year}</ExpenseYear>
        </ExpenseDateContainer>
    );
};
