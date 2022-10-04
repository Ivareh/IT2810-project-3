import { Box, Container } from '@mui/material'
import GitLabRepoDataLoader from './GitLabRepoDataLoader'

function GitLab() {
    return (
        <Container id={'dataContainer'}
            sx={{
                display: 'flex',
                justifyContent: 'center',
                width: '100%'
            }}
            maxWidth="lg">
            <GitLabRepoDataLoader />
            <Box>
                {/* <GitLabRepo/>*/}
            </Box>
        </Container>
    )
}

export default GitLab