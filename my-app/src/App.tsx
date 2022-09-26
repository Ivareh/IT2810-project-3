import { Grid } from "@mui/material";
import Header from "./components/Header";
import Footer from './components/Footer';
import About from "./components/About";
import Upload from "./components/GitlabRepo";
import './App.css';


function App() {
  return (
    <Grid container direction={"column"} minHeight={'100vh'} 
    style={{
      backgroundColor: "white",
    }}>
      <Header />
      <About />
      <Upload />
      <Footer />
    </Grid>
  );
}

export default App;
