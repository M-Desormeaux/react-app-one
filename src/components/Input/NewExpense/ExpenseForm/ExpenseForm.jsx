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
    const [expenseAmount, setExpenseAmount] = useState("");

    const dateChangeHandler = (event) => {
        setExpenseDate(event.target.value);
    };

    const titleChangeHandler = (event) => {
        setExpenseTitle(event.target.value);
    };

    const amountChangeHandler = (event) => {
        setExpenseAmount(event.target.value);
    };

    const submitHandler = (event) => {
        event.preventDefault();

        const expenseData = {
            date: new Date(expenseDate),
            title: expenseTitle,
            amount: expenseAmount,
        };

        props.onExpenseSubmit(expenseData);

        setExpenseDate("");
        setExpenseTitle("");
        setExpenseAmount("");
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
                            required
                        />
                    </ControlGroup>
                    <ControlGroup>
                        <ControlLabel>Title</ControlLabel>
                        <ControlInput
                            value={expenseTitle}
                            onChange={titleChangeHandler}
                            type="text"
                            required
                        />
                    </ControlGroup>
                    <ControlGroup>
                        <ControlLabel>Amount</ControlLabel>
                        <ControlInput
                            value={expenseAmount}
                            onChange={amountChangeHandler}
                            type="number"
                            min="0.01"
                            step="0.01"
                            required
                        />
                    </ControlGroup>
                    <ControlButton type="submit">Add Expense</ControlButton>
                </Controls>
            </form>
        </ExpenseFormContainer>
    );
};
