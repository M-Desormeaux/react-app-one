import React, { useState } from "react";
import {
    FilterLayerTwo,
    FilterGroup,
    FilterLabel,
    FilterSelect,
    FilterOption,
} from "./ExpenseFilterStyle";

export const ExpenseFilter = (props) => {
    const filterYearHandler = (event) => {
        props.onFilterYear(event.target.value);
    };
    const filterMonthHandler = (event) => {
        props.onFilterMonth(event.target.value);
    };

    return (
        <FilterLayerTwo>
            <FilterGroup>
                <FilterLabel>Month</FilterLabel>
                <FilterSelect
                    onChange={filterMonthHandler}
                    value={props.selectedMonth}
                >
                    <FilterOption value="all">all</FilterOption>
                    <FilterOption value="Jan">Jan</FilterOption>
                    <FilterOption value="Feb">Feb</FilterOption>
                    <FilterOption value="Mar">Mar</FilterOption>
                    <FilterOption value="Apr">Apr</FilterOption>
                    <FilterOption value="May">May</FilterOption>
                    <FilterOption value="Jun">Jun</FilterOption>
                    <FilterOption value="Jul">Jul</FilterOption>
                    <FilterOption value="Aug">Aug</FilterOption>
                    <FilterOption value="Sep">Sep</FilterOption>
                    <FilterOption value="Oct">Oct</FilterOption>
                    <FilterOption value="Nov">Nov</FilterOption>
                    <FilterOption value="Dec">Dec</FilterOption>
                </FilterSelect>
            </FilterGroup>
            <FilterGroup>
                <FilterLabel>Year</FilterLabel>
                <FilterSelect
                    onChange={filterYearHandler}
                    value={props.selectedYear}
                >
                    <FilterOption value="all">all</FilterOption>
                    <FilterOption value="2024">2024</FilterOption>
                    <FilterOption value="2023">2023</FilterOption>
                    <FilterOption value="2022">2022</FilterOption>
                    <FilterOption value="2021">2021</FilterOption>
                    <FilterOption value="2020">2020</FilterOption>
                </FilterSelect>
            </FilterGroup>
        </FilterLayerTwo>
    );
};
