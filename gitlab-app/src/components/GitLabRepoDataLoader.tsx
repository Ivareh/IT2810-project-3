import {Box, Container, ThemeProvider, Typography, TypographyProps} from '@mui/material';
import GitLabTheme from '../themes/GitLabTheme';


/* Loads GitLab data from a repo*/
function GitLabRepoDataLoader(props: TypographyProps) {
  return (
    <>
      <Container >
        <Box>
          <Typography align="left" variant="h4" fontWeight={500} gutterBottom > GitLab Repo Data Loader </Typography>
        </Box>
        <Box component="span"   >
          <Typography ml={5} align="left" variant="body1" fontWeight={500} gutterBottom > hey</Typography>
        </Box>
      </Container>
    </>
  )
}

export default GitLabRepoDataLoader