import React from "react";
import { AppContainer, AppWrapper, GlobalStyle } from "./AppStyle";
import { ExpenseChart } from "./components/ExpenseChart/ExpenseChart";
import { ExpenseList } from "./components/ExpenseList/ExpenseList";
import { PageTitle } from "./components/PageTitle/PageTitle";

export const App = () => {
    return (
        <AppWrapper>
            <AppContainer>
                <GlobalStyle />
                <PageTitle title="Expense Tracker" />
                <ExpenseChart />
                <ExpenseList />
            </AppContainer>
        </AppWrapper>
    );
};
