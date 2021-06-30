import React from "react";
import { AppContainer, AppWrapper, GlobalStyle } from "./AppStyle";
import { ExpenseChart } from "./components/UI/ExpenseChart/ExpenseChart";
import { ExpenseList } from "./components/UI/ExpenseList/ExpenseList";
import { AddExpense } from "./components/Input/AddExpense/AddExpense";
import { PageTitle } from "./components/UI/PageTitle/PageTitle";

export const App = () => {
    return (
        <AppWrapper>
            <AppContainer>
                <GlobalStyle />
                <PageTitle title="Expense Tracker" />
                <AddExpense />
                <ExpenseChart />
                <ExpenseList />
            </AppContainer>
        </AppWrapper>
    );
};
