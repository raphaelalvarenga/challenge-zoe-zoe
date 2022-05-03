import { ThemeProvider } from "styled-components";
import Assets from "./pages/Assets";
import GlobalStyles from "./shared/components/GlobalStyles";
import themes from "./shared/themes";

const App = () => (
    <GlobalStyles>
        <ThemeProvider theme={themes}>
            <h1 style={{ textAlign: "center" }}>Logo</h1>
            <Assets />
        </ThemeProvider>
    </GlobalStyles>
);

export default App;
