import React from "react";
import { AppContainer, AppWrapper, GlobalStyle } from "./AppStyle";
import { ExpenseChart } from "./components/UI/ExpenseChart/ExpenseChart";
import { ExpenseList } from "./components/UI/ExpenseList/ExpenseList";
import { PageTitle } from "./components/UI/PageTitle/PageTitle";
import { NewExpense } from "./components/Input/NewExpense/NewExpense";

export const App = () => {
    return (
        <AppWrapper>
            <AppContainer>
                <GlobalStyle />
                <PageTitle title="Expense Tracker" />
                <NewExpense />
                <ExpenseChart />
                <ExpenseList />
            </AppContainer>
        </AppWrapper>
    );
};
