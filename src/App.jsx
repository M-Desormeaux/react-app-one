import React, { useState } from "react";
import { AppContainer, AppWrapper, GlobalStyle } from "./AppStyle";
import { ExpenseChart } from "./components/UI/ExpenseChart/ExpenseChart";
import { ExpenseList } from "./components/UI/ExpenseList/ExpenseList";
import { NewExpense } from "./components/Input/NewExpense/NewExpense";
import { initialExpenses } from "./data/initialExpenses";

export const App = () => {
    const [expenses, setExpenses] = useState(initialExpenses);

    addDynamicExpense = (expense) => {
        setExpenses((prevExpenses) => {
            console.log([expense, ...prevExpenses]);
            return [expense, ...prevExpenses];
        });
    };

    return (
        <AppWrapper>
            <AppContainer>
                <GlobalStyle />
                <ExpenseChart />
                <NewExpense onNewExpense={addDynamicExpense} />
                <ExpenseList expenseList={expenses} />
            </AppContainer>
        </AppWrapper>
    );
};
