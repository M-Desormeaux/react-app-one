import React from "react";
import { BarBody, BarFill, BarLabel, DynamicBar } from "./ChartBarStyle";

export const ChartBar = (props) => {
    let barFill = 0;

    if (props.maxValue > 0) {
        barFill = Math.round((props.value / props.maxValue) * 100);
    }

    return (
        <DynamicBar>
            <BarBody>
                <BarFill heightValue={barFill} />
            </BarBody>
            <BarLabel>{props.label}</BarLabel>
        </DynamicBar>
    );
};
