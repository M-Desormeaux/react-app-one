import React from "react";
import { ExpenseItem } from "./ExpenseItem/ExpenseItem";
import { ListContainer, ListLayerTwo } from "./ExpenseListStyle";

export const ExpenseList = (props) => {
    const listExpenses =
        props.expenseList.length > 0 ? (
            props.expenseList.map((expense) => (
                <ExpenseItem
                    key={expense.key}
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
