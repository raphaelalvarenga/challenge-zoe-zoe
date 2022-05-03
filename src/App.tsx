import { ThemeProvider } from "styled-components";
import themes from "./shared/themes";

const App = () => (
    <ThemeProvider theme={themes}>
        <h1>App</h1>
    </ThemeProvider>
);

export default App;
