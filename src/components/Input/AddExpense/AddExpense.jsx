import React from "react";
import styled from "styled-components";
import { ExpenseForm } from "../ExpenseForm/ExpenseForm";

const AddExpenseContainer = styled.div``;

export const AddExpense = () => {
    return (
        <AddExpenseContainer>
            <ExpenseForm />
        </AddExpenseContainer>
    );
};
