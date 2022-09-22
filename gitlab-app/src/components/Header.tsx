import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import FadeMenu from './FadeMenu';
import Header from '../style/Header.css';

function Header () {
  return(
    <Container className="header" maxWidth="sm">
      <Box className="title">
        <h1>GitLab App</h1>
      </Box>

      <Box sx={{margin: 'auto', width:'20px'}}>
        <FadeMenu></FadeMenu>
      </Box>
    </Container>
  )
}


export default Header;