import React, { useState } from "react";
import { AppContainer, AppWrapper, GlobalStyle } from "./AppStyle";
import { ExpenseList } from "./components/ExpenseList/ExpenseList";
import { NewExpense } from "./components/NewExpense/NewExpense";
import { initialExpenses } from "./data/initialExpenses";

export const App = () => {
    const [expenses, setExpenses] = useState(initialExpenses);

    addExpenseHandler = (expense) => {
        setExpenses((prevExpenses) => {
            return [expense, ...prevExpenses];
        });
    };

    deleteExpenseHandler = (targetID) => {
        setExpenses((prevExpenses) => {
            const updatedExpenses = prevExpenses.filter(
                (target) => target.key !== targetID
            );
            return updatedExpenses;
        });
    };

    return (
        <AppWrapper>
            <AppContainer>
                <GlobalStyle />
                <NewExpense onNewExpense={addExpenseHandler} />
                <ExpenseList
                    expenseList={expenses}
                    onDeleteExpense={deleteExpenseHandler}
                />
            </AppContainer>
        </AppWrapper>
    );
};
