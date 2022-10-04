import TextField from "@mui/material/TextField";
import SendIcon from "@mui/icons-material/Send";
import Button from "@mui/material/Button";
import {useState} from "react";
import "../component-css/InputForm.css";
import {Box} from "@mui/material";

// Input form for the user to input to get the data from the GitLab API with specified repository and store data in local storage
export default function InputForm() {
    const [domain, setDomain] = useState(
        "https://gitlab.stud.idi.ntnu.no/api/v4/projects/"
    );
    const [projectId, setProjectId] = useState("17598");
    const [token, setToken] = useState("glpat-2vnnyXYGFDt9YKYu5QYW");

    // Function to handle the submit of the form. Stores the fetched data in the local storage
    const handleSubmit = async (e: { preventDefault: () => void; }) => {
        e.preventDefault()
        fetchCommits().then((data) => localStorage.setItem('commits',
            JSON.stringify(data))).then(() =>
                alert('Data loaded!'))

        fetchIssues().then((data) => localStorage.setItem('issues',
            JSON.stringify(data)))
    }

    // Fetches the issues from the GitLab API wit specified url from user input
    const fetchIssues = async (): Promise<object> => {
        try {
            const url = `${domain}/${projectId}/issues?per_page=100&private_token=${token}`
            const res = await fetch(url)
            if (res.ok) {
                return await res.json()
            } else {
                alert("Something went wrong!")
            }

        } catch (e) {
            console.log(e)

        }
    }

    // Fetches the commits from the GitLab API wit specified url from user input
    const fetchCommits = async (): Promise<object> => {
        try {
            const url = `${domain}/${projectId}/repository/commits?per_page=100&private_token=${token}`
            const res = await fetch(url)
            if (res.ok) {
                return await res.json()
            }


        } catch (e) {
            console.log(e)

        }
    }

    return (
        <form
            onSubmit={handleSubmit}
            id={'inputform'}
            style={{ display: "flex", flexFlow: 'row wrap' }}>
            <TextField id="outlined-search"
                inputProps={{ "data-testid": "domain" }}
                sx={{
                    marginTop: '20px',
                    minWidth: 350,
                    fontSize: '24px',
                    marginBottom: '25px'
                }}
                fullWidth
                label="Domain"
                type="text"
                value={domain}
                onChange={(event) => {
                    setDomain(event.target.value as string)
                }}
            />
            <TextField id="gitlab-id"
                inputProps={{ "data-testid": "gitlab-id" }}
                sx={{
                    minWidth: 350,
                    fontSize: '24px',
                    marginBottom: '25px'
                }}
                label="Project id"
                fullWidth
                type="number"
                value={projectId}
                onChange={(event) => {
                    setProjectId(event.target.value as string)
                }}
            />
            <TextField id="outlined-search"
                sx={{
                    minWidth: 350,
                    fontSize: '24px',
                    marginBottom: '25px'
                }}
                inputProps={{ "data-testid": "token" }}
                fullWidth
                label="Token"
                type="text"
                value={token}
                onChange={(event) => {
                    setToken(event.target.value as string)
                }}
            />
            <Box ml={1}>
                <Button
                    data-testid={'get'}
                    variant="contained"
                    type={'submit'}
                    sx={{ minWidth: 100, maxWidth: 500 }}
                    endIcon={<SendIcon />}>
                    Get
                </Button>
            </Box>

        </form>
    )

}
