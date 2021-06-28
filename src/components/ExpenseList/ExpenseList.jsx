import React from "react";
import { ExpenseItem } from "./ExpenseItem/ExpenseItem";
import { ListContainer } from "./ExpenseListStyle";
import { expenses } from "./ExpenseItem/expenses";

export const ExpenseList = () => {
    const listExpenses = expenses.map((expense) => (
        <ExpenseItem
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
        />
    ));

    return <ListContainer>{listExpenses}</ListContainer>;
};
