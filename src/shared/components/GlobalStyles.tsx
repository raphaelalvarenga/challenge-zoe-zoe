import { FC } from "react";
import { createGlobalStyle } from "styled-components";

const Global = createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    font-family: Arial;
    box-sizing: border-box;
}
`;

interface IGlobalStyles {
    children: JSX.Element;
}

const GlobalStyles: FC<IGlobalStyles> = ({ children }) => (
    <>
        <Global />
        {children}
    </>
);

export default GlobalStyles;
