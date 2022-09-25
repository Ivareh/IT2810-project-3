import { CssBaseline } from '@mui/material';
import {BrowserRouter, BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Header from './components/Header';
import GitLabRepoDataLoader from './components/GitLabRepoDataLoader';
import GitLabRepo from './components/GitLabRepo';


function App() {
  return (
    <Router>
      <CssBaseline/>
      <Header/>
      <Routes>
        <Route path="/" element={<GitLabRepoDataLoader/>}/>
        <Route path="/gitlab-repo" element={<GitLabRepo/>}/>
      </Routes>

    </Router>
  ); 
}

export default App;
