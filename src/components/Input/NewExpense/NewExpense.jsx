import React from "react";
import styled from "styled-components";
import { ExpenseForm } from "../ExpenseForm/ExpenseForm";

const NewExpenseContainer = styled.div``;

export const NewExpense = (props) => {
    function getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
    }

    const expenseSubmitHandler = (enteredExpense) => {
        const expenseSubmitData = {
            ...enteredExpense,
            key: `${getRandomInt(1, 50)}_${new Date().getTime()}`,
        };

        props.onNewExpense(expenseSubmitData);
    };

    return (
        <NewExpenseContainer>
            <ExpenseForm onExpenseSubmit={expenseSubmitHandler} />
        </NewExpenseContainer>
    );
};
