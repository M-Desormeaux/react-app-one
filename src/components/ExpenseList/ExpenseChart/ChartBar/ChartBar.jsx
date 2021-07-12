import React from "react";
import styled from "styled-components";

const Container = styled.div`
    margin-right: 1rem;

    &:last-child {
        margin: 0;
    }
`;

const DynamicBar = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;
const BarBody = styled.div`
    height: 100px;
    width: 20px;
    background: red;

    display: flex;
    align-items: flex-end;
`;
const BarFill = styled.div`
    width: 100%;
    height: ${(props) => props.heightValue}%;
    background: green;
`;
const BarLabel = styled.div``;

export const ChartBar = (props) => {
    return (
        <Container>
            <DynamicBar>
                <BarBody>
                    <BarFill
                        heightValue={(props.value / props.maxValue) * 100}
                    />
                </BarBody>
                <BarLabel>
                    <>{props.month}</>
                    <br />
                    <>{props.year}</>
                </BarLabel>
            </DynamicBar>
        </Container>
    );
};
