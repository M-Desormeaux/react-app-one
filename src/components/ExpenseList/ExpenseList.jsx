import React, { useState } from "react";
import { ExpenseItem } from "./ExpenseItem/ExpenseItem";
import { ExpenseFilter } from "./ExpenseFilter/ExpenseFilter.jsx";
import { ListContainer, ListLayerTwo } from "./ExpenseListStyle";
import { ExpenseChart } from "./ExpenseChart/ExpenseChart";

export const ExpenseList = (props) => {
    const [filteredYear, setFilteredYear] = useState("2021");

    const filterYearHandler = (filterYear) => {
        setFilteredYear(filterYear);
    };

    const itemFilter = props.expenseList.filter((expense) => {
        const itemDate = new Date(expense.date);
        const itemYear = itemDate.toLocaleDateString("en-US", {
            year: "numeric",
        });
        return itemYear == filteredYear;
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

    return (
        <ListContainer>
            <ExpenseChart />
            <ExpenseFilter
                selected={filteredYear}
                onFilter={filterYearHandler}
            />
            {listExpenses}
        </ListContainer>
    );
};
