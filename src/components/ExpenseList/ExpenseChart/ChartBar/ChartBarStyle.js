import styled from "styled-components";

export const BarContainer = styled.div`
    margin-right: 1rem;

    &:last-child {
        margin: 0;
    }

    @media screen and (max-height: 600px) {
        margin: 0 0 1rem;
    }
`;

export const DynamicBar = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    @media screen and (max-height: 600px) {
        display: flex;
        flex-direction: row;
    }
`;

export const BarBody = styled.div`
    height: 100px;
    width: 20px;
    background: #84a9ac;

    display: flex;
    align-items: flex-end;

    @media screen and (max-height: 600px) {
        height: 20px;
        width: 100px;
    }
`;

export const BarFill = styled.div`
    width: 100%;
    height: ${(props) => (props.heightValue < 100 ? props.heightValue : 100)}%;
    background: #204051;

    @media screen and (max-height: 625px) {
        height: 100%;
        width: ${(props) =>
            props.heightValue < 100 ? props.heightValue : 100}%;
    }
`;

export const BarLabel = styled.div``;
