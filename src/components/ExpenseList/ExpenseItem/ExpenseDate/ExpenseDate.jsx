import React from "react";
import {
    ExpenseDateContainer,
    ExpenseDay,
    ExpenseMonth,
    ExpenseYear,
} from "./ExpenseDateStyle";

export const ExpenseDate = (props) => {
    return (
        <ExpenseDateContainer>
            <ExpenseMonth>{props.month}</ExpenseMonth>
            <ExpenseDay>{props.day}</ExpenseDay>
            <ExpenseYear>{props.year}</ExpenseYear>
        </ExpenseDateContainer>
    );
};
