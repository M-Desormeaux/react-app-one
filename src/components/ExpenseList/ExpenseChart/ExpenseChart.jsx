import React from "react";
import { ExpenseChartContainer } from "./ExpenseChartStyle";
import { ExpenseBar } from "./ExpenseBar/ExpenseBar";

export const ExpenseChart = (props) => {
    return (
        <ExpenseChartContainer>
            <ExpenseBar />
        </ExpenseChartContainer>
    );
};
