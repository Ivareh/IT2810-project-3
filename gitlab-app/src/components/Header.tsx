import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import FadeMenu from './FadeMenu';
import '../style/Header.css';

function Header () {
  return(
    <Container maxWidth="sm">
      <Box sx={{
        margin: 'auto',
        width: 180,
      }}>
        <h1>GitLab App</h1>
      </Box>


      <Box sx={{
        margin: 'auto',
        width:'58px'}}>
        <FadeMenu></FadeMenu>
      </Box>
    </Container>
  )
}


export default Header;