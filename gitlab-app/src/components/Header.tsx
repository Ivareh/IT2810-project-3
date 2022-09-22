import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import FadeMenu from './FadeMenu';

function Header () {
  return(
    <Container className="header" maxWidth="sm">
      <Box sx={{height: '20vh', width: "35%", margin: 'auto', }}>
        <h1>GitLab App</h1>
      </Box>

      <Box className="menu">
        <FadeMenu />
      </Box>
    </Container>
  )
}


export default Header;