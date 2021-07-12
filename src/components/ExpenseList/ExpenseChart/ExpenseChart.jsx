import React from "react";
import { ChartBar } from "./ChartBar/ChartBar";
import { chartMonths, chartYears } from "./ExpenseCharts";
import {
    ExpenseChartContainer,
    ExpenseChartGraph,
    ExpenseChartLabel,
} from "./ExpenseChartStyle";

export const ExpenseChart = (props) => {
    console.log(props);
    const selectedMonth = props.selectedMonth;
    const selectedYear = props.selectedYear;
    const yearMax = 4000;
    const monthMax = 2000;

    const chartLabel =
        selectedMonth === "all"
            ? selectedYear === "all"
                ? "All History"
                : selectedYear + " History"
            : selectedYear === "all"
            ? selectedMonth + " History"
            : selectedMonth + " " + selectedYear + " History";

    for (const item in props.items) {
        console.log(`MonthID: ${item}`);
        const expenseMonth = props.items[item].date.getMonth();
        chartMonths[expenseMonth].value += props.items[item].amount;
    }

    for (const item in props.items) {
        const expenseYear = props.items[item].date.getFullYear();
        for (const year in chartYears) {
            if (chartYears[year].label == expenseYear) {
                chartYears[year].value += props.items[item].amount;
            }
        }
    }

    for (const year in chartYears) {
        console.log(`${chartYears[year].label}: ${chartYears[year].value}`);
    }

    const chartGraph =
        selectedMonth === "all"
            ? selectedYear === "all"
                ? chartYears.map((dataPoint) => (
                      <ChartBar
                          key={dataPoint.key}
                          id={dataPoint.key}
                          label={dataPoint.label}
                          value={dataPoint.value}
                          maxValue={yearMax}
                      />
                  ))
                : chartMonths.map((dataPoint) => (
                      <ChartBar
                          key={dataPoint.key}
                          id={dataPoint.key}
                          label={dataPoint.label}
                          value={dataPoint.value}
                          maxValue={monthMax}
                      />
                  ))
            : selectedYear === "all"
            ? selectedMonth + " History"
            : selectedMonth + " " + selectedYear + " History";

    return (
        <ExpenseChartContainer>
            <ExpenseChartLabel>{chartLabel}</ExpenseChartLabel>
            <ExpenseChartGraph>{chartGraph}</ExpenseChartGraph>
        </ExpenseChartContainer>
    );
};
