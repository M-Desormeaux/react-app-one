import React from "react";
import styled from "styled-components";

const Container = styled.div`
    margin-right: 1rem;

    &:last-child {
        margin: 0;
    }
`;

export const ChartBar = (props) => {
    return (
        <Container>
            <>{props.value / props.maxValue}</>
        </Container>
    );
};
