import React from "react";
import { ExpenseItem } from "./ExpenseItem/ExpenseItem";
import { ListContainer } from "./ExpenseListStyle";
import { expenses } from "../../data/expenses";

export const ExpenseList = () => {
    const listExpenses = expenses.map((expense) => (
        <ExpenseItem
            itemKey={expense.key}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
        />
    ));

    return <ListContainer>{listExpenses}</ListContainer>;
};
