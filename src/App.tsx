import React from "react";
import {
  CssBaseline,
  ThemeProvider,
} from "@mui/material";
import { createTheme } from "@mui/material/styles";
import WebRouter from "./routes/WebRouter";
import AuthProvider from "./contexts/AuthContext/AuthContext";
import GlobalWrapper from "./components/GlobalWrapper";
import GlobalProvider from "./contexts/GlobalContext/GlobalContext";

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