import {Box, Container, Typography, TypographyProps} from '@mui/material';

/* Loads GitLab data from a repo*/
function GitLabRepoDataLoader(props: TypographyProps) {
  return (
    <>
   <Container maxWidth="lg">
      <Box mt={10}>
        <Typography align="left" variant="h4" fontWeight={500} gutterBottom > GitLab Repo Data Loader </Typography>
          <Box border={1} minHeight={20}>
            {/* Form to load data */}
          </Box>
      </Box>
    </Container>
    </>
  )
}

export default GitLabRepoDataLoader