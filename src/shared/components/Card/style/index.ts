import styled from "styled-components";

interface IAssetPrice {
    status: string;
}

interface IArrow {
    isActive: boolean;
}

export const Container = styled.div`
    width: 100%;
    max-width: 400px;
    border-radius: 5px;
    box-shadow: 2px 2px 2px 2px rgba(0, 0, 0, 0.25);
    padding: 14px 8px;
`;

export const AssetHeader = styled.div`
    font-size: 20px;
`;

export const AssetBody = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const AssetType = styled.div`
    color: ${({ theme }) => theme.darkGrey};
    font-size: 12px;
`;

export const AssetPrice = styled.div<IAssetPrice>`
    color: ${({ theme, status }) => (status === "bull" ? theme.blue : theme.red)};
    font-size: 35px;
`;

export const AssetArrows = styled.div`
    display: flex;
    font-size: 20px;
`;

export const ArrowUp = styled.div<IArrow>`
    color: ${({ theme, isActive }) => (isActive ? theme.blue : theme.lightGrey)};
    margin-top: -10px;
`;

export const ArrowDown = styled.div<IArrow>`
    color: ${({ theme, isActive }) => (isActive ? theme.red : theme.lightGrey)};
    margin-top: 10px;
`;
