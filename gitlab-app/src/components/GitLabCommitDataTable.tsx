import {
    TableContainer,
    Table,
    TableHead,
    TableRow,
    TableBody,
    Paper,
    TableCell
} from '@mui/material';
import {useEffect, useState} from 'react';
import SampleCommitData from './data/SampleCommitData';
import {CommitItem} from "./interface/DataFormat"


// Gets the data from the SampleCommitData file
function getPropValues() {
    let data: Array<CommitItem> = []
    let sampleData = SampleCommitData;
    sampleData.forEach((item) => {
        item.forEach((value) => {
            data.push(value)
        })
    })
    return data
}

/* Table, inspired by https://www.youtube.com/watch?v=qk2oY7W3fuY*/
function GitLabCommitDataTable() {
    const [tableData, setTableData] = useState([]);
    const [commits, setCommits] = useState([]);

    function getCommits() {
        const commits = localStorage.getItem("commits");
        const initialValueIssues = JSON.parse(commits);
        return initialValueIssues || "";

    }


    // Sets data to the table once when the component is mounted
    useEffect(() => {
        setCommits(getCommits())
        let data: CommitItem[] = getPropValues()
        setTableData(data)
    }, [])

    return (
        <TableContainer component={Paper} sx={{maxHeight: 400}}>
            <Table aria-label="simple table" stickyHeader>
                <TableHead>
                    <TableRow>
                        <TableCell>Title</TableCell>
                        <TableCell>Author name</TableCell>
                        <TableCell>Committer name</TableCell>
                        <TableCell align='center'>Committed date</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {commits.map((commit =>
                            <TableRow
                                key={commit.id}
                                sx={{'&:last-child td, &:last-child th': {border: 0}}}
                            >
                                <TableCell width={600}>{commit.title}</TableCell>
                                <TableCell>{commit.author_name}</TableCell>
                                <TableCell>{commit.committer_name}</TableCell>
                                <TableCell
                                    align='center'>{commit.committed_date}</TableCell>
                            </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    )
}


export default GitLabCommitDataTable