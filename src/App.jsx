import React, { useState } from "react";
import { AppContainer, AppWrapper, GlobalStyle } from "./AppStyle";
import { ExpenseList } from "./components/UI/ExpenseList/ExpenseList";
import { NewExpense } from "./components/Input/NewExpense/NewExpense";
import { initialExpenses } from "./data/initialExpenses";

export const App = () => {
    const [expenses, setExpenses] = useState(initialExpenses);

    addDynamicExpense = (expense) => {
        setExpenses((prevExpenses) => {
            return [expense, ...prevExpenses];
        });
    };

    return (
        <AppWrapper>
            <AppContainer>
                <GlobalStyle />
                <NewExpense onNewExpense={addDynamicExpense} />
                <ExpenseList expenseList={expenses} />
            </AppContainer>
        </AppWrapper>
    );
};
