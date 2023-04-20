import { CssBaseline, ThemeProvider } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import GlobalWrapper from "./components/GlobalWrapper";
import AuthProvider from "./contexts/AuthContext/AuthContext";
import GlobalProvider from "./contexts/GlobalContext/GlobalContext";
import WebRouter from "./routes/WebRouter";

function App() {
  const theme = createTheme();

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <GlobalProvider>
        <AuthProvider>
          <GlobalWrapper>
            <WebRouter />
          </GlobalWrapper>
        </AuthProvider>
      </GlobalProvider>
    </ThemeProvider>
  );
}

export default App;
