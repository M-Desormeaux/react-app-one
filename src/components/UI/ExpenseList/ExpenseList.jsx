import React, { useState } from "react";
import { ExpenseItem } from "./ExpenseItem/ExpenseItem";
import { ExpenseFilter } from "./ExpenseFilter/ExpenseFilter.jsx";
import { ListContainer, ListLayerTwo } from "./ExpenseListStyle";

export const ExpenseList = (props) => {
    const [filteredYear, setFilteredYear] = useState("2021");

    const filterYearHandler = (filterYear) => {
        setFilteredYear(filterYear);
    };

    const listExpenses =
        props.expenseList.length > 0 ? (
            props.expenseList.map((expense) => (
                <ExpenseItem
                    key={expense.key}
                    title={expense.title}
                    amount={expense.amount}
                    date={expense.date}
                />
            ))
        ) : (
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
