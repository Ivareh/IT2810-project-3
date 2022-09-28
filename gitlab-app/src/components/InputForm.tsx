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

    }


    /* const commitsStructure = [
         {
             0:
                 {
                     id: '8f8f742368b068cd1bc5855c51e261e93c366488',
                     short_id: '8f8f7423',
                     created_at: '2022-09-26T21:42:50.000+02:00',
                     parent_ids: Array(2),
                     title: "Merge branch 'revert-dd2c9307' into 'main'",
                 }
         }, {
             1:
                 {
                     id: '4d5e1faf40bda73a23a28c95a5a6ff7d377b1b97',
                     short_id: '4d5e1faf',
                     created_at: '2022-09-26T21:41:48.000+02:00',
                     parent_ids: Array(1),
                     title: 'Revert "Created dynamic fetch functions for' +
                         ' getting issues and commits. As',
                 }
         }
     ]*/

    /*    const issueStructure = [
            {
                id: 76903,
                iid: 6,
                project_id: 17598,
                title: 'Fetch request med AJAX',
                description: 'Skriv fetch request med AJAX opp mot rest-api til' +
                    ' gitlab',
            }
        ]*/

    const fetchIssues = async () => {
        try {
            await fetch(`${domain}/${projectId}/issues?private_token=${token}`)
                .then((res) => res.json())
                .then((result) => {
                    setIssues(result)
                })
        } catch (e) {
            console.log(e)

        }

    }
    const fetchCommits = async () => {
        try {
            await fetch(`${domain}/${projectId}/repository/commits?private_token=${token}`)
                .then((res) => res.json())
                .then((result) => {
                    setCommits(result)
                })

        } catch (e) {
            console.log(e)
        }

    }

    return (
        <div>
            <form
                onSubmit={handleSubmit}
                style={{display: "flex", flexFlow: 'row nowrap'}}>
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
                           sx={{minWidth: '100px'}}
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
            {/*
            {issues.map((issue) => (
                <p key={issue.iid}>{issue.title}</p>
            ))}*/}
        </div>
    )

}