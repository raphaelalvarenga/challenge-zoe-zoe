import { createGlobalStyle, ThemeProvider } from "styled-components";
import GlobalStyles from "./shared/components/GlobalStyles";
import themes from "./shared/themes";

const App = () => (
    <GlobalStyles>
        <ThemeProvider theme={themes}>
            <h1>App</h1>
        </ThemeProvider>
    </GlobalStyles>
);

export default App;
