import { CssBaseline } from "@mui/material";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import { ColorModeProvider } from "./components/contexts/ColorMode";
import SwapModes from "./components/SwapModes";
import GitLab from "./components/GitLab";

function App() {
  return (
    <ColorModeProvider>
        <CssBaseline />
        <Header />
          <GitLab />
      <SwapModes />
    </ColorModeProvider>
  );
}

export default App;
