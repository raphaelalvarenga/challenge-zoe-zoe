import styled from "styled-components";

export const CardsContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, 300px);
    justify-content: center;
    gap: 10px 20px;

    @media (min-width: 1000px) {
        justify-content: space-between;
    }
`;
