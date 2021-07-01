import React, { useState } from "react";
import { ExpenseDate } from "../ExpenseDate/ExpenseDate";
import {
    ExpenseItemContainer,
    Description,
    ExpenseData,
    ExpenseButton,
    TopLayer,
    BottomLayer,
} from "./ExpenseItemStyle";

export const ExpenseItem = (props) => {
    const amount = props.amount;
    const cost = amount.toLocaleString("en-US", {
        style: "currency",
        currency: "USD",
    });

    const [title, setTitle] = useState(props.title);

    const clickHandler = () => {
        setTitle(<strike>{props.title}</strike>);
    };

    return (
        <ExpenseItemContainer>
            <ExpenseButton onClick={clickHandler}></ExpenseButton>
            <BottomLayer>
                <ExpenseDate date={props.date} />
                <Description>{title}</Description>
                <ExpenseData>{cost}</ExpenseData>
            </BottomLayer>
        </ExpenseItemContainer>
    );
};
