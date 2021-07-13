import styled from "styled-components";

export const ExpenseItemContainer = styled.div`
    position: relative;
    padding: 1rem;
    margin-bottom: 1rem;
    border-radius: 0.5rem;
    background: #84a9ac;
    display: flex;

    &:hover {
        background: #1a2634;
    }

    &:last-child {
        margin: 0;
    }

    @media screen and (max-width: 450px) {
        flex-direction: column;
        align-items: center;
    }
`;

export const ExpenseButton = styled.button`
    position: absolute;
    width: 16px;
    height: 16px;
    top: 8px;
    right: 8px;

    border: 0;
    border-radius: 100%;
    background: #ff3052;

    align-self: flex-end;

    @media screen and (max-width: 760px) {
        width: 40px;
        height: 40px;
    }
`;

export const BottomLayer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-end;

    width: 100%;
`;

export const Secretlayer = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
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
        margin: 0 1rem 0 0;
    }
`;
