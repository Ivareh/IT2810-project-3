import { CssBaseline } from '@mui/material';
import {BrowserRouter, BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Header from './components/Header';
import GitLabRepoDataLoader from './components/GitLabRepoDataLoader';
import GitLabRepo from './components/GitLabRepo';
import SampleCommitData from './components/data/SampleCommitData';
/* import {CommitItem} from './components/interface/DataFormat'; */
import React from 'react';
import {ColorModeProvider} from "./components/contexts/ColorMode";
import SwapModes from "./components/SwapModes";


function App() {
  return (
      <ColorModeProvider>
    <Router>
      <CssBaseline/>
      <Header/>
      <Routes>
        <Route path="/" element={<GitLab/>}/>
      </Routes>
    </Router>
        <SwapModes/>
      </ColorModeProvider>
  ); 
}

export default App;
