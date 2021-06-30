import React from "react";
import {
    ControlButton,
    ControlGroup,
    ControlInput,
    ControlLabel,
    Controls,
    ExpenseFormContainer,
} from "./ExpenseFormStyle";

export const ExpenseForm = () => {
    return (
        <ExpenseFormContainer>
            <form>
                <Controls>
                    <ControlGroup>
                        <ControlLabel>Date</ControlLabel>
                        <ControlInput type="date" min="2018-01-01" />
                    </ControlGroup>
                    <ControlGroup>
                        <ControlLabel>Title</ControlLabel>
                        <ControlInput type="text" />
                    </ControlGroup>
                    <ControlGroup>
                        <ControlLabel>Cost</ControlLabel>
                        <ControlInput type="number" min="0.01" step="0.01" />
                    </ControlGroup>
                    <ControlButton>Add Expense</ControlButton>
                </Controls>
            </form>
        </ExpenseFormContainer>
    );
};
