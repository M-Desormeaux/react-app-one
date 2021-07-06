import React from "react";
import { ChartLayerTwo, ExpenseChartContainer } from "./ExpenseChartStyle";
import { ExpenseBar } from "./ExpenseBar/ExpenseBar";

export const ExpenseChart = () => {
    return (
        <ExpenseChartContainer>
            <ChartLayerTwo>
                <ExpenseBar />
            </ChartLayerTwo>
        </ExpenseChartContainer>
    );
};
