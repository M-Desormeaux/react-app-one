import React, { useState } from "react";
import { ExpenseItem } from "./ExpenseItem/ExpenseItem";
import { ExpenseFilter } from "./ExpenseFilter/ExpenseFilter.jsx";
import { ListContainer, ListLayerTwo } from "./ExpenseListStyle";
import { ExpenseChart } from "./ExpenseChart/ExpenseChart";

export const ExpenseList = (props) => {
    const [filteredYear, setFilteredYear] = useState("all");
    const [filteredMonth, setFilteredMonth] = useState("all");

    const filterYearHandler = (filterYear) => {
        setFilteredYear(filterYear);
    };

    const filterMonthHandler = (filterMonth) => {
        setFilteredMonth(filterMonth);
    };
    const itemFilter = props.expenseList.filter((expense) => {
        const itemDate = new Date(expense.date);
        const itemYear = itemDate.toLocaleDateString("en-US", {
            year: "numeric",
        });
        const itemMonth = itemDate.toLocaleDateString("en-US", {
            month: "short",
        });

        return filteredMonth === "all"
            ? filteredYear === "all"
                ? true
                : itemYear === filteredYear
            : filteredYear === "all"
            ? itemMonth === filteredMonth
            : itemYear === filteredYear && itemMonth === filteredMonth;
    });

    // Map all the expense items in expenses to expenseitem components
    const listExpenses =
        itemFilter.length > 0 ? (
            itemFilter.map((expense) => (
                <ExpenseItem
                    key={expense.key}
                    title={expense.title}
                    amount={expense.amount}
                    date={expense.date}
                />
            ))
        ) : (
            // Return a blank panel if no elements found
            <ListLayerTwo>
                <h3>No Expenses to list</h3>
            </ListLayerTwo>
        );

    // Filter all the data to make charting easier
    const filteredItems = itemFilter.map((expense) => {
        const key = expense.key;
        const fullDate = new Date(expense.date);
        const month = fullDate.toLocaleDateString("en-US", { month: "short" });
        const year = fullDate.toLocaleDateString("en-US", { year: "numeric" });
        return {
            key: key,
            amount: expense.amount,
            month: month,
            year: year,
        };
    });

    return (
        <ListContainer>
            <ExpenseChart
                items={filteredItems}
                selectedYear={filteredYear}
                selectedMonth={filteredMonth}
            />
            <ExpenseFilter
                selectedYear={filteredYear}
                selectedMonth={filteredMonth}
                onFilterYear={filterYearHandler}
                onFilterMonth={filterMonthHandler}
            />
            {listExpenses}
        </ListContainer>
    );
};
