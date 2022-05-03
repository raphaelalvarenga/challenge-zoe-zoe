import styled from "styled-components";

export const Container = styled.div`
    border-bottom: 1px solid ${({ theme }) => theme.lightGrey};
    height: 25px;
    width: 180px;
    display: flex;
    align-items: center;
`;

export const IconContainer = styled.div`
    color: ${({ theme }) => theme.darkGrey};
    margin-right: 4px;
`;

export const InputContainer = styled.div`
    margin-top: -3px;
`;

export const CustomInput = styled.input`
    border: none;
    outline: none;
    color: ${({ theme }) => theme.black};
`;
