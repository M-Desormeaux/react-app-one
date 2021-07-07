import styled from "styled-components";

export const FilterLayerTwo = styled.div`
    padding: 1rem;
    margin-bottom: 1rem;
    border-radius: 0.5rem;
    background: #84a9ac;
    text-align: center;

    display: flex;
    justify-content: center;
`;

export const FilterGroup = styled.div`
    position: relative;
    padding: 1rem;
    border-radius: 0.5rem;
    background: #e4e3e3;
    width: fit-content;
    margin-right: 1rem;

    display: flex;
    justify-content: center;

    &:last-child {
        margin: 0;
    }
`;

export const FilterLabel = styled.label`
    position: absolute;
    padding: 0 0.25rem;
    top: 0.5rem;
    z-index: 1;
    background: #e4e3e3;
`;

export const FilterSelect = styled.select`
    border-radius: 0.5rem;
    border: 1px solid #204051;
    padding: 0.5rem;
    background: #e4e3e3;
    height: 2.5rem;
    width: 80px;

    display: flex;
    justify-content: center;
`;

export const FilterOption = styled.option`
    width: fit-content;
`;
