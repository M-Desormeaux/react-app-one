import React, { useState } from "react";
import { AppContainer, AppWrapper, GlobalStyle } from "./AppStyle";
import { ExpenseChart } from "./components/UI/ExpenseChart/ExpenseChart";
import { ExpenseList } from "./components/UI/ExpenseList/ExpenseList";
import { PageTitle } from "./components/UI/PageTitle/PageTitle";
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
                <PageTitle title="Expense Tracker" />
                <NewExpense onNewExpense={addDynamicExpense} />
                <ExpenseChart />
                <ExpenseList expenseList={expenses} />
            </AppContainer>
        </AppWrapper>
    );
};
