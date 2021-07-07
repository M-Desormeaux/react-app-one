import React from "react";
import { ExpenseChartContainer } from "./ExpenseChartStyle";
import { ExpenseBar } from "./ExpenseBar/ExpenseBar";

export const ExpenseChart = (props) => {
    console.log(props.amounts);

    return (
        <ExpenseChartContainer>
            <ExpenseBar />
        </ExpenseChartContainer>
    );
};
