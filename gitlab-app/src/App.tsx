import { CssBaseline } from '@mui/material';
import {BrowserRouter, BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Header from './components/Header';
import GitLabRepoDataLoader from './components/GitLabRepoDataLoader';
import GitLabRepo from './components/GitLabRepo';
import SampleCommitData from './components/data/SampleCommitData';
/* import {CommitItem} from './components/interface/DataFormat'; */
import React from 'react';
import GitLab from './components/GitLab';


function App() {
  return (
    // Displayed in routes for future implementation of multiple pages, e.g. data visualisation
    <Router>
      <CssBaseline/>
      <Header/>
      <Routes>
        <Route path="/" element={<GitLab/>}/>
      </Routes>

    </Router>
  ); 
}

export default App;
