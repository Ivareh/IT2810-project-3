import { Box, CssBaseline } from '@mui/material';
import { Container } from '@mui/system';
import Header from './components/Header';
import GitLabRepoDataLoader from './components/GitLabRepoDataLoader';


function App() {
  return (
    <>    
    <CssBaseline/>
      <Box marginBottom={10 }>
       <Header/>
      </Box>
      <Box className="GitLabRepoDataLoader" marginLeft={35} maxHeight={"100%"}>
        <GitLabRepoDataLoader/>
      </Box>
    </>
  ); 
}

export default App;
