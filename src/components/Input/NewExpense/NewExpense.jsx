import React from "react";
import { ExpenseForm } from "../ExpenseForm/ExpenseForm";

export const NewExpense = (props) => {
    function getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
    }

    const expenseSubmitHandler = (enteredExpense) => {
        const expenseSubmitData = {
            ...enteredExpense,
            key: `${getRandomInt(1, 9999)}${getRandomInt(
                1,
                9999
            )}_${new Date().getTime()}`,
        };

        props.onNewExpense(expenseSubmitData);
    };

    return (
        <div>
            <ExpenseForm onExpenseSubmit={expenseSubmitHandler} />
        </div>
    );
};
