import {
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow
} from '@mui/material';
import {useEffect, useState} from 'react';
import SampleCommitData from './data/SampleCommitData';
import {CommitItem} from "./interface/DataFormat"


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
function GitLabDataTable() {
    const [tableData, setTableData] = useState([]);
    const [issues, setIssues] = useState([]);
    const [commits, setCommits] = useState([]);

    function getIssues() {
        const issues = localStorage.getItem("issues");
        const initialValueIssues = JSON.parse(issues);
        return initialValueIssues || "";
    }

    function getCommits() {
        const commits = localStorage.getItem("commits");
        const initialValueIssues = JSON.parse(commits);
        return initialValueIssues || "";

    }

    function printData(): void {
        if (localStorage.getItem('commits') || localStorage.getItem('issues')) {
            console.log(commits)
            console.log(issues)
            // the code under shows size of local storage.
            // https://stackoverflow.com/questions/4391575/how-to-find-the-size-of-localstorage
            let _lsTotal = 0, _xLen, _x;
            for (_x in localStorage) {
                if (!localStorage.hasOwnProperty(_x)) {
                    continue;
                }
                _xLen = ((localStorage[_x].length + _x.length) * 2);
                _lsTotal += _xLen;
                console.log(_x.substr(0, 50) + " = " + (_xLen / 1024).toFixed(2) + " KB")
            }
            console.log("Total = " + (_lsTotal / 1024).toFixed(2) + " KB");
        } else {
            alert('Data not loaded.')
        }
    }

    useEffect(() => {
        setIssues(getIssues())
        setCommits(getCommits())
        let data: CommitItem[] = getPropValues()
        setTableData(data)
    }, [])

    return (
        <TableContainer component={Paper} sx={{maxHeight: 400}}>
            <button onClick={() => printData()}>Print data and size of localStorage
            </button>
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
                                key={commit.short_id}
                                sx={{'&:last-child td, &:last-child th': {border: 0}}}
                            >
                                <TableCell
                                    width={600}>{commit.title}</TableCell>
                                <TableCell>{commit.author_name}</TableCell>
                                <TableCell
                                    align='center'>{commit.committer_name}</TableCell>
                                <TableCell
                                    align='center'>{commit.committed_date}</TableCell>
                            </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    )
}


export default GitLabDataTable