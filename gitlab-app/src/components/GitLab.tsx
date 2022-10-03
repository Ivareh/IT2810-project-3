import { Box, Container } from "@mui/material";
import GitLabRepo from "./GitLabRepo";
import GitLabRepoDataLoader from "./GitLabRepoDataLoader";

function GitLab() {
  return (
    <Container maxWidth="lg">
      <Box mt={10}>
        <GitLabRepoDataLoader />
      </Box>
      <Box>
        <GitLabRepo />
      </Box>
    </Container>
  );
}

export default GitLab;
