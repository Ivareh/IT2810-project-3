import { Container, Typography } from "@mui/material"
import { Box } from "@mui/system"




/* Displays Git Lab Data after it is loaded in a table with parameters*/
function GitLabRepo() {
  return (
    <Container maxWidth="lg">
      <Box mt={10} >
        <Typography align="left" variant="h4" fontWeight={500} gutterBottom > GitLab Repo </Typography>
        <Box border={1} height={300} width="sm">
          {/* Table to display data */}
        </Box>
      </Box>
    </Container>
  )
}


export default GitLabRepo