import React from "react";
import { AppContainer, AppWrapper, GlobalStyle } from "./AppStyle";
import { ExpenseChart } from "./components/UI/ExpenseChart/ExpenseChart";
import { ExpenseList } from "./components/UI/ExpenseList/ExpenseList";
import { PageTitle } from "./components/UI/PageTitle/PageTitle";
import { ExpenseForm } from "./components/Input/ExpenseForm/ExpenseForm";

export const App = () => {
    return (
        <AppWrapper>
            <AppContainer>
                <GlobalStyle />
                <PageTitle title="Expense Tracker" />
                <ExpenseForm />
                <ExpenseChart />
                <ExpenseList />
            </AppContainer>
        </AppWrapper>
    );
};
