import React from "react";
import {
    BarBody,
    BarContainer,
    BarFill,
    BarLabel,
    DynamicBar,
} from "./CharBarStyle";

export const ChartBar = (props) => {
    let barFill = 0;

    if (props.maxValue > 0) {
        barFill = Math.round((props.value / props.maxValue) * 100);
    }

    return (
        <BarContainer>
            <DynamicBar>
                <BarBody>
                    <BarFill heightValue={barFill} />
                </BarBody>
                <BarLabel>
                    <>{props.month}</>
                    <br />
                    <>{props.year}</>
                </BarLabel>
            </DynamicBar>
        </BarContainer>
    );
};
