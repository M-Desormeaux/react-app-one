import React from "react";
import styled from "styled-components";
import { ExpenseForm } from "../ExpenseForm/ExpenseForm";

const NewExpenseContainer = styled.div``;

export const NewExpense = () => {
    const expenseSubmitHandler = (mystery) => {};

    return (
        <NewExpenseContainer>
            <ExpenseForm onExpenseSubmit />
        </NewExpenseContainer>
    );
};
