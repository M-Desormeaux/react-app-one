import React, { useState } from "react";
import { ExpenseForm } from "./ExpenseForm/ExpenseForm";
import { FormButton, FormContainer, FormLayerTwo } from "./NewExpenseStyle";

export const NewExpense = (props) => {
    const [formActive, setFormActive] = useState(false);

    function getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
    }

    const expenseSubmitHandler = (enteredExpense) => {
        const expenseSubmitData = {
            ...enteredExpense,
            key: `${getRandomInt(1, 9999)}${getRandomInt(
                1,
                9999
            )}_${new Date().getTime()}`,
        };

        props.onNewExpense(expenseSubmitData);
    };

    const showFormHandler = () => {
        formActive === false ? setFormActive(true) : setFormActive(false);
    };

    const hideFormHandler = (formValue) => {
        formValue === false ? setFormActive(false) : setFormActive(true);
    };

    return (
        <FormContainer>
            <FormLayerTwo>
                {formActive === false ? (
                    <FormButton onClick={showFormHandler}>
                        Add Expense
                    </FormButton>
                ) : (
                    <ExpenseForm
                        onExpenseSubmit={expenseSubmitHandler}
                        onFormSubmit={hideFormHandler}
                    />
                )}
            </FormLayerTwo>
        </FormContainer>
    );
};
