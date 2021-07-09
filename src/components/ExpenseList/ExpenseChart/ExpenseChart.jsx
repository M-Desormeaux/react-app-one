import React from "react";
import { ChartBar } from "./ChartBar/ChartBar";
import {
    ExpenseChartContainer,
    ExpenseChartGraph,
    ExpenseChartLabel,
} from "./ExpenseChartStyle";

export const ExpenseChart = (props) => {
    const selectedMonth = props.selectedMonth;
    const selectedYear = props.selectedYear;

    const label =
        selectedMonth === "all"
            ? selectedYear === "all"
                ? "Yearly Snapshot"
                : "Single Year Snapshot"
            : selectedYear === "all"
            ? "Month Through the Years"
            : "Single Month Snapshot";

    return (
        <ExpenseChartContainer>
            <ExpenseChartLabel>{label}</ExpenseChartLabel>
            <ExpenseChartGraph>
                {props.items.length > 0
                    ? props.items.map((dataPoint) => (
                          <ChartBar
                              key={dataPoint.key}
                              id={dataPoint.key}
                              month={dataPoint.month}
                              year={dataPoint.year}
                              value={dataPoint.amount}
                              maxValue={2000}
                          />
                      ))
                    : "No Data To Be Found..."}
            </ExpenseChartGraph>
        </ExpenseChartContainer>
    );
};
