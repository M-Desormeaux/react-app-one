import React, { useState } from "react";
import {
    ControlButton,
    ControlGroup,
    ControlInput,
    ControlLabel,
    Controls,
    ExpenseFormContainer,
} from "./ExpenseFormStyle";

export const ExpenseForm = (props) => {
    const [expenseTitle, setExpenseTitle] = useState("");
    const [expenseDate, setExpenseDate] = useState("");
    const [expenseCost, setExpenseCost] = useState("");

    const dateChangeHandler = (event) => {
        setExpenseDate(event.target.value);
    };

    const titleChangeHandler = (event) => {
        setExpenseTitle(event.target.value);
    };

    const costChangeHandler = (event) => {
        setExpenseCost(event.target.value);
    };

    const submitHandler = (event) => {
        event.preventDefault();

        const expenseData = {
            date: new Date(expenseDate),
            title: expenseTitle,
            cost: expenseCost,
        };

        props.onExpenseSubmit(expenseData);

        setExpenseDate("");
        setExpenseTitle("");
        setExpenseCost("");
    };

    return (
        <ExpenseFormContainer>
            <form onSubmit={submitHandler}>
                <Controls>
                    <ControlGroup>
                        <ControlLabel>Date</ControlLabel>
                        <ControlInput
                            value={expenseDate}
                            onChange={dateChangeHandler}
                            type="date"
                            min="2018-01-01"
                        />
                    </ControlGroup>
                    <ControlGroup>
                        <ControlLabel>Title</ControlLabel>
                        <ControlInput
                            value={expenseTitle}
                            onChange={titleChangeHandler}
                            type="text"
                        />
                    </ControlGroup>
                    <ControlGroup>
                        <ControlLabel>Cost</ControlLabel>
                        <ControlInput
                            value={expenseCost}
                            onChange={costChangeHandler}
                            type="number"
                            min="0.01"
                            step="0.01"
                        />
                    </ControlGroup>
                    <ControlButton type="submit">Add Expense</ControlButton>
                </Controls>
            </form>
        </ExpenseFormContainer>
    );
};
