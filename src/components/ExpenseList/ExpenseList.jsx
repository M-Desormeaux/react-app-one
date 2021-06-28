import React from "react";
import { ExpenseItem } from "../ExpenseItem/ExpenseItem";
import { ListContainer } from "./ExpenseListStyle";

export const ExpenseList = () => {
    return (
        <ListContainer>
            <ExpenseItem
                title="Toilet Paper"
                amount="94.12"
                date="2020, 7, 14"
            />
            <ExpenseItem title="New TV" amount="799.49" date="2021, 2, 12" />
            <ExpenseItem
                title="Car Insurance"
                amount="294.67"
                date="2021, 2, 28"
            />
            <ExpenseItem
                title="New Wood Desk"
                amount="450.00"
                date="2021, 5, 12"
            />
            <ExpenseItem
                title="Microcenter"
                amount="135.45"
                date="2021, 6, 1"
            />
            <ExpenseItem title="Computer" amount="985.99" date="2021, 6, 25" />
        </ListContainer>
    );
};
