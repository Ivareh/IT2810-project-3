import {Box, Container, Typography, TypographyProps} from '@mui/material';
import InputForm from '../InputForm/InputForm';
import "./GitLabRepoDataLoader.css"

/* Loads GitLab data from a repo*/
function GitLabRepoDataLoader(props: TypographyProps) {
  return (
    <>
   <Container maxWidth="lg">
      <Box mt={10}>
        <Typography id="fontLoad" align="left" variant="h4" fontWeight={500} gutterBottom > GitLab Repo Data Loader </Typography>
          <Box border={0} minHeight={20}>
            <InputForm/>
          </Box>
      </Box>
    </Container>
    </>
  )
}

export default GitLabRepoDataLoader