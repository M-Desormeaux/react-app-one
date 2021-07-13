import React from "react";
import { ChartBar } from "./ChartBar/ChartBar";
import { chartMonths, chartYears, thisMonth } from "./ExpenseCharts";
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

    for (const item in props.items) {
        thisMonth[0].value += props.items[item].amount;
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
            ? chartYears.map((dataPoint) => (
                  <ChartBar
                      key={dataPoint.key}
                      id={dataPoint.key}
                      label={dataPoint.label}
                      value={dataPoint.value}
                      maxValue={yearMax}
                  />
              ))
            : thisMonth.map((dataPoint) => (
                  <ChartBar
                      key={dataPoint.key}
                      id={dataPoint.key}
                      label={selectedMonth}
                      value={dataPoint.value}
                      maxValue={yearMax}
                  />
              ));

    return (
        <ExpenseChartContainer>
            <ExpenseChartLabel>{chartLabel}</ExpenseChartLabel>
            <ExpenseChartGraph>{chartGraph}</ExpenseChartGraph>
        </ExpenseChartContainer>
    );
};
