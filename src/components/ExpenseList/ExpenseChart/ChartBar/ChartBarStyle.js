import styled from "styled-components";

export const DynamicBar = styled.div`
    margin-right: 1rem;

    display: flex;
    flex-direction: column;
    align-items: center;

    &:last-child {
        margin: 0;
    }

    @media screen and (max-width: 600px) {
        display: flex;
        flex-direction: row;

        margin: 0 0 1rem;

        &:last-child {
            margin: 0;
        }
    }
`;

export const BarBody = styled.div`
    height: 100px;
    width: 20px;
    border-radius: 0.25rem;
    overflow: hidden;
    background: #84a9ac;

    display: flex;
    align-items: flex-end;

    @media screen and (max-width: 600px) {
        height: 20px;
        width: 160px;
        margin-right: 0.5rem;
    }
`;

export const BarFill = styled.div`
    width: 100%;
    height: ${(props) => (props.heightValue < 100 ? props.heightValue : 100)}%;
    border-radius: 4px;
    background: #204051;

    @media screen and (max-width: 600px) {
        height: 100%;
        width: ${(props) =>
            props.heightValue < 100 ? props.heightValue : 100}%;
    }
`;

export const BarLabel = styled.div``;
