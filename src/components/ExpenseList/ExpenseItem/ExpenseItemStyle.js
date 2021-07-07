import styled from "styled-components";

export const ExpenseItemContainer = styled.div`
    position: relative;
    padding: 1rem;
    margin-bottom: 1rem;
    border-radius: 0.5rem;
    background: #84a9ac;

    &:hover {
        background: #1a2634;
    }

    &:last-child {
        margin: 0;
    }
`;

export const ExpenseButton = styled.button`
    position: absolute;
    right: 1rem;
    padding: 0.5rem;
    width: 8px;
    height: 8px;
    border: 0;
    border-radius: 2rem;
    background: #ff3052;
`;

export const BottomLayer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media screen and (max-width: 450px) {
        flex-direction: column;
    }
`;

export const Secretlayer = styled.div`
    width: 100%;
    display: flex;
    align-items: center;

    @media screen and (max-width: 450px) {
        margin: 0.5rem 0;
    }
`;

export const ExpenseData = styled.div`
    padding: 1rem;
    min-width: 100px;
    border-radius: 0.5rem;
    background: #e4e3e3;
    margin: 0;
    text-align: center;
`;

export const Description = styled.div`
    width: 100%;
    padding: 1rem;
    margin: 0 1rem;
    border-radius: 0.5rem;
    background: #e4e3e3;
    justify-content: left;

    strike {
        color: #888;
    }

    @media screen and (max-width: 450px) {
        margin: 0.5rem 1rem 0.5rem 0;
    }
`;
