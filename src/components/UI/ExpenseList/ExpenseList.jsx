import React from "react";
import { ExpenseItem } from "./ExpenseItem/ExpenseItem";
import { ListContainer, ListLayerTwo } from "./ExpenseListStyle";
import { expenses } from "../../../data/expenses";

export const ExpenseList = () => {
    const listExpenses =
        expenses.length > 0 ? (
            expenses.map((expense) => (
                <ExpenseItem
                    itemKey={expense.key}
                    title={expense.title}
                    amount={expense.amount}
                    date={expense.date}
                />
            ))
        ) : (
            <ListLayerTwo>
                <h3>No Expenses to list</h3>
            </ListLayerTwo>
        );

    return <ListContainer>{listExpenses}</ListContainer>;
};
