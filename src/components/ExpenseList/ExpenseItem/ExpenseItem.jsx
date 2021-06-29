import React from "react";
import { ExpenseDate } from "./ExpenseDate/ExpenseDate";
import {
    ExpenseItemContainer,
    Description,
    ExpenseData,
    ExpenseButton,
} from "./ExpenseItemStyle";

export const ExpenseItem = (props) => {
    const date = new Date(props.date);
    const month = date.toLocaleDateString("en-US", { month: "short" });
    const day = date.toLocaleDateString("en-US", { day: "2-digit" });
    const year = date.toLocaleDateString("en-US", { year: "numeric" });

    const amount = props.amount;
    const cost = amount.toLocaleString("en-US", {
        style: "currency",
        currency: "USD",
    });

    let title = props.title;

    const clickHandler = () => {
        title = "Clicked " + title;
        console.log("Title Changed to: " + title);
    };

    return (
        <ExpenseItemContainer>
            <ExpenseDate month={month} day={day} year={year} />
            <Description>{title}</Description>
            <ExpenseData>{cost}</ExpenseData>
            <ExpenseButton onClick={clickHandler}>📝</ExpenseButton>
        </ExpenseItemContainer>
    );
};
