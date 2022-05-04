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
grid-template-columns: repeat(auto-fill, 400px);
gap: 50px 80px;
`;
