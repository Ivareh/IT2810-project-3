import { CssBaseline } from '@mui/material';
import Header from './components/Header';
import About from './components/About';
import Footer from './components/Footer';
/* import {CommitItem} from './components/interface/DataFormat'; */
import { ColorModeProvider } from "./components/contexts/ColorMode";
import GitLab from './components/GitLab';


function App() {
  return (
    <ColorModeProvider>
      <Router>
        <CssBaseline />
        <Header />
        <About />
        <Routes>
          <Route path="/" element={<GitLab />} />
        </Routes>
      </Router>
      <Footer />
    </ColorModeProvider>
  );
}

export default App;
