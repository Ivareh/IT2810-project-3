import { Box, Container, Typography, TypographyProps } from "@mui/material";
import GitLabRepo from "./GitLabRepo";
import InputForm from "./InputForm";

/* Loads GitLab data from a repo*/
function GitLabRepoDataLoader(props: TypographyProps) {
  return (
    <>
      <Container maxWidth="lg">
        <Box mb={15} display="flex" flexWrap={"wrap"} justifyContent="center">
          <Box minWidth={"100%"}>
            <Typography align="center" variant="h4" fontWeight={500} mb={10}>
              {" "}
              GitLab Repo Data Loader{" "}
            </Typography>
          </Box>
          <Box border={0}>
            <InputForm />
          </Box>
        </Box>
      </Container>
    </>
  );
}

export default GitLabRepoDataLoader;
