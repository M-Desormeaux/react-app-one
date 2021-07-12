import styled from "styled-components";

export const BarContainer = styled.div`
    margin-right: 1rem;

    &:last-child {
        margin: 0;
    }
`;

export const DynamicBar = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;
export const BarBody = styled.div`
    height: 100px;
    width: 20px;
    background: cornsilk;
    border-radius: 1rem;

    display: flex;
    align-items: flex-end;
`;
export const BarFill = styled.div`
    width: 100%;
    height: ${(props) => (props.heightValue < 100 ? props.heightValue : 100)}%;
    border-radius: 1rem;
    background: gray;
`;
export const BarLabel = styled.div``;
