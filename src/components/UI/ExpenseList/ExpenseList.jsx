import React, { useState } from "react";
import { ExpenseItem } from "./ExpenseItem/ExpenseItem";
import { ExpenseFilter } from "./ExpenseFilter/ExpenseFilter.jsx";
import { ListContainer, ListLayerTwo } from "./ExpenseListStyle";

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

    console.log(itemFilter);

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
            <ExpenseFilter
                selected={filteredYear}
                onFilter={filterYearHandler}
            />
            {listExpenses}
        </ListContainer>
    );
};
