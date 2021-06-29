import styled from "styled-components";

export const TopLayer = styled.div`
    display: flex;
    justify-content: flex-end;
`;
export const BottomLayer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const ExpenseItemContainer = styled.div`
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
`;

export const ExpenseButton = styled.button`
    padding: 0.5rem;
    width: 8px;
    height: 8px;
    border: 0;
    border-radius: 2rem;
    background: #ff3052;
`;
