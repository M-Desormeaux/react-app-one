import React from "react";
import { ExpenseChartContainer } from "./ExpenseChartStyle";
import { ExpenseBar } from "./ExpenseBar/ExpenseBar";

export const ExpenseChart = (props) => {
    const items = props.items;
    const selectedMonth = props.selectedMonth;
    const selectedYear = props.selectedYear;
    console.log(items);

    items.map((item) =>
        console.log(`${item.month}, ${item.year} | $${item.amount}`)
    );

    const label =
        selectedMonth === "all"
            ? selectedYear === "all"
                ? "Yearly Snapshot"
                : "Single Year Snapshot"
            : selectedYear === "all"
            ? "Same Month Every Year"
            : "Single Month Snapshot";

    return (
        <ExpenseChartContainer>
            <h4>{label}</h4>
            <ExpenseBar />
        </ExpenseChartContainer>
    );
};
