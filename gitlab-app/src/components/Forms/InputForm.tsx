import TextField from "@mui/material/TextField";
import SendIcon from "@mui/icons-material/Send";
import Button from "@mui/material/Button";
import {useState} from "react";
import "./InputForm.css";

export default function InputForm() {
    const [domain, setDomain] = useState(
        "https://gitlab.stud.idi.ntnu.no/api/v4/projects/"
    );
    const [projectId, setProjectId] = useState("17598");
    const [token, setToken] = useState("glpat-2vnnyXYGFDt9YKYu5QYW");

    const handleSubmit = async (e: { preventDefault: () => void }) => {
        e.preventDefault();
        fetchCommits()
            .then((data) => localStorage.setItem("commits", JSON.stringify(data)))
            .then(() => alert("Data loaded!"));

        fetchIssues().then((data) =>
            localStorage.setItem("issues", JSON.stringify(data))
        );
    };

    const fetchIssues = async (): Promise<object> => {
        try {
            const url = `${domain}/${projectId}/issues?private_token=${token}`;
            const res = await fetch(url);
            if (res.ok) {
                return await res.json();
            } else {
                alert("Something went wrong!");
            }
        } catch (e) {
            console.log(e);
        }
    };

    const fetchCommits = async (): Promise<object> => {
        try {
            const url = `${domain}/${projectId}/repository/commits?private_token=${token}`;
            const res = await fetch(url);
            if (res.ok) {
                return await res.json();
            }
        } catch (e) {
            console.log(e);
        }
    };

    return (
        <form id="inputform" onSubmit={handleSubmit}>
            <TextField
                id="outlined-search"
                style={{
                    minWidth: 350,
                    fontSize: '24px',
                    marginBottom: '25px'
                }}
                variant={"standard"}
                required
                label="Domain"
                value={domain}
                onChange={(event) => {
                    setDomain(event.target.value as string);
                }}
            />
            <TextField
                id="gitlab-id"
                label="Project id"
                style={{
                    minWidth: 350,
                    maxWidth: 500,
                    fontSize: '24px',
                    marginBottom: '25px'
                }}
                variant={"standard"}
                required
                size="small"
                type="number"
                value={projectId}
                onChange={(event) => {
                    setProjectId(event.target.value as string);
                }}
            />
            <TextField
                id="outlined-search"
                style={{
                    minWidth: 350,
                    maxWidth: 500,
                    marginBottom: '25px'
                }}
                variant={"standard"}
                required
                size="small"
                label="Token"
                type="text"
                value={token}
                onChange={(event) => {
                    setToken(event.target.value as string);
                }}
            />

            <Button id="getButton" variant="contained" type={"submit"}
                    sx={{minWidth: 100, maxWidth: 500}}
                    endIcon={<SendIcon/>}>
                Get
            </Button>
        </form>

    );
}
