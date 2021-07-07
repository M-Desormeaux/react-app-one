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

        console.log(`${filteredMonth} ${filteredYear}`);

        return filteredMonth === "all"
            ? filteredYear === "all"
                ? true
                : itemYear === filteredYear
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

    const filteredAmounts = itemFilter.map((expense) => expense.amount);

    return (
        <ListContainer>
            <ExpenseChart amounts={filteredAmounts} />
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
