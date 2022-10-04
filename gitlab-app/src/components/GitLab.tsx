import {Box, Container} from '@mui/material'
import React from 'react'
import GitLabRepoDataLoader from './GitLabRepoDataLoader'

function GitLab() {
  return (
      <Container id={'dataContainer'}
                 sx={{
                     display: 'flex',
                     justifyContent: 'center',
                     width: '100%',
                     padding: '0'
                 }}
      >
          <GitLabRepoDataLoader/>
          <Box>
              {/* <GitLabRepo/>*/}
          </Box>
      </Container>
  )
}

export default GitLab