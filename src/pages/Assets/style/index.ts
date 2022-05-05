import styled from "styled-components";

export const Container = styled.div`
    padding: 0 15px;
`;

export const FiltersContainer = styled.div`
    margin: 20px 0 40px 0;
    display: grid;
    grid-template-columns: auto auto;
`;

export const CardsContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, 300px);
    justify-content: center;
    gap: 10px 20px;

    @media (min-width: 1000px) {
        justify-content: space-between;
    }
`;
