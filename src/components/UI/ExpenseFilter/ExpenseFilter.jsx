import React, { useState } from "react";
import {
    FilterLayerTwo,
    FilterGroup,
    FilterLabel,
    FilterSelect,
    FilterOption,
} from "./ExpenseFilterStyle";

export const ExpenseFilter = (props) => {
    const filterDateHandler = (event) => {
        props.onFilter(event.target.value);
    };

    return (
        <FilterLayerTwo>
            <FilterGroup>
                <FilterLabel>Filter by year</FilterLabel>
                <FilterSelect
                    onChange={filterDateHandler}
                    value={props.selected}
                >
                    <FilterOption value="2022">2022</FilterOption>
                    <FilterOption value="2021">2021</FilterOption>
                    <FilterOption value="2020">2020</FilterOption>
                    <FilterOption value="2019">2019</FilterOption>
                    <FilterOption value="2018">2018</FilterOption>
                </FilterSelect>
            </FilterGroup>
        </FilterLayerTwo>
    );
};
