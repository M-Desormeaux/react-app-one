import React, { useState } from "react";
import { ExpenseDate } from "./ExpenseDate/ExpenseDate";
import {
    ExpenseItemContainer,
    Description,
    ExpenseData,
    ExpenseButton,
    BottomLayer,
    Secretlayer,
} from "./ExpenseItemStyle";

export const ExpenseItem = (props) => {
    const clickHandler = () => {
        props.onDelete(props.id);
    };

    const amount = `$${props.amount.toFixed(2)}`;

    return (
        <ExpenseItemContainer>
            <ExpenseDate date={props.date} />
            <BottomLayer>
                <ExpenseButton onClick={clickHandler}></ExpenseButton>
                <Secretlayer>
                    <Description>{props.title}</Description>
                    <ExpenseData>{amount}</ExpenseData>
                </Secretlayer>
            </BottomLayer>
        </ExpenseItemContainer>
    );
};
