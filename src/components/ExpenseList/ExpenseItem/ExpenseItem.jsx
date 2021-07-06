import React, { useState } from "react";
import { ExpenseDate } from "./ExpenseDate/ExpenseDate";
import {
    ExpenseItemContainer,
    Description,
    ExpenseData,
    ExpenseButton,
    BottomLayer,
} from "./ExpenseItemStyle";

export const ExpenseItem = (props) => {
    const [title, setTitle] = useState(props.title);

    const clickHandler = () => {
        setTitle(<strike>{props.title}</strike>);
    };

    const amount = `$${props.amount.toFixed(2)}`;

    return (
        <ExpenseItemContainer>
            <ExpenseButton onClick={clickHandler}></ExpenseButton>
            <BottomLayer>
                <ExpenseDate date={props.date} />
                <Description>{title}</Description>
                <ExpenseData>{amount}</ExpenseData>
            </BottomLayer>
        </ExpenseItemContainer>
    );
};
