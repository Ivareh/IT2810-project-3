import TextField from '@mui/material/TextField';
import SendIcon from '@mui/icons-material/Send';
import Button from '@mui/material/Button';
import {useState} from "react";

export default function InputForm() {
    const [domain, setDomain] = useState('https://gitlab.stud.idi.ntnu.no/api/v4/projects/')
    const [projectId, setProjectId] = useState('17598')
    const [token, setToken] = useState('glpat-2vnnyXYGFDt9YKYu5QYW')
    const [issues, setIssues] = useState([])
    const [commits, setCommits] = useState([])

    const handleSubmit = async (e: { preventDefault: () => void; }) => {
        e.preventDefault()
        await fetchIssues()
        await fetchCommits()
        console.log(issues)
        console.log(commits)

    }

    const fetchIssues = async () => {
        await fetch(`${domain}/${projectId}/issues?private_token=${token}`)
            .then((res) => res.json())
            .then((result) => {
                setIssues(result)
            })
    }
    const fetchCommits = async () => {
        await fetch(`${domain}/${projectId}/repository/commits?private_token=${token}`)
            .then((res) => res.json())
            .then((result) => {
                setCommits(result)
            })
    }

    return (
        <div>
            <form
                onSubmit={handleSubmit}
                style={{display: "flex"}}>
                <TextField id="outlined-search"
                           fullWidth
                           label="Domain"
                           type="text"
                           value={domain}
                           onChange={(event) => {
                               setDomain(event.target.value as string)
                           }}
                />
                <TextField id="gitlab-id"
                           label="Project id"
                           sx={{minWidth: '200px'}}
                           type="number"
                           value={projectId}
                           onChange={(event) => {
                               setProjectId(event.target.value as string)
                           }}
                />
                <TextField id="outlined-search"
                           fullWidth
                           label="Token"
                           type="text"
                           value={token}
                           onChange={(event) => {
                               setToken(event.target.value as string)
                           }}
                />
                <Button
                    variant="contained"
                    type={'submit'}
                    endIcon={<SendIcon/>}>
                    Get
                </Button>
            </form>

            {issues.map((issue) => (
                <p key={issue.iid}>{issue.title}</p>
            ))}
        </div>
    )

}