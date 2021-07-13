import React from "react";
import { ChartBar } from "./ChartBar/ChartBar";
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

    const chartMonths = [
        {
            key: 01,
            label: "Jan",
            value: 0,
        },
        {
            key: 02,
            label: "Feb",
            value: 0,
        },
        {
            key: 03,
            key: 0,
            label: "Mar",
            value: 0,
        },
        {
            key: 04,
            label: "Apr",
            value: 0,
        },
        {
            key: 05,
            label: "May",
            value: 0,
        },
        {
            key: 06,
            label: "Jun",
            value: 0,
        },
        {
            key: 07,
            label: "Jul",
            value: 0,
        },
        {
            key: 08,
            label: "Aug",
            value: 0,
        },
        {
            key: 09,
            label: "Sep",
            value: 0,
        },
        {
            key: 10,
            label: "Oct",
            value: 0,
        },
        {
            key: 11,
            label: "Nov",
            value: 0,
        },
        {
            key: 12,
            label: "Dec",
            value: 0,
        },
    ];

    const chartYears = [
        {
            key: 01,
            label: "2020",
            value: 0,
        },
        {
            key: 02,
            label: "2021",
            value: 0,
        },
        {
            key: 03,
            label: "2022",
            value: 0,
        },
        {
            key: 04,
            label: "2023",
            value: 0,
        },
        {
            key: 05,
            label: "2024",
            value: 0,
        },
    ];

    const thisMonth = [
        {
            key: 01,
            label: "",
            value: 0,
        },
    ];

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
