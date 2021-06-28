import React from "react";
import { AppContainer, AppWrapper, GlobalStyle } from "./AppStyle";
import { ExpenseList } from "./components/ExpenseList/ExpenseList";
import { PageTitle } from "./components/PageTitle/PageTitle";

export const App = () => {
    return (
        <AppWrapper>
            <AppContainer>
                <GlobalStyle />
                <PageTitle title="Expense Tracker" />
                <ExpenseList />
            </AppContainer>
        </AppWrapper>
    );
};
