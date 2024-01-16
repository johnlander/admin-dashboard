import React from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Settings from "./pages/Settings";

const theme = createTheme({
  typography: {
    fontFamily: "Roboto, sans-serif",
  },
});

const App = () => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Dashboard />}></Route>
            <Route path="/settings" element={<Settings />}></Route>
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </>
  );
};

export default App;
