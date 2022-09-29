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
import {filterById, filterByTitle, filterByAuthor, filterByCommitter, filterByDate} from "./FilterCommitData"


// Checks if inputs are valid
function checkValidInputs( filterKey : string, filterString : string) {
  if ((filterKey && !filterString) || (!filterKey && filterString)) {
    throw new Error("Invalid input, must have both filter key and filter string")
  }
  if (filterKey && filterString) {
    switch(filterKey){
      case "id":
        if (isNaN(parseInt(filterString))) {
          throw new Error("Invalid input, filter string must be a number")
        }
        break;
      case "title":
        break;
      case "author_name":
        break;
      case "committer_name":
        break;
      case "committed_date":
        break;
      default:
        throw new Error("Invalid input, filter key is not valid")
    }
  }
  return true
}

// Gets data. If there is applied a filter, it will return the filtered data
// If there is no filter, it will return the original data
function getPropValues(filterKey : string, filterString : string) {
  let sampleData = SampleCommitData.flat();
  filterKey="id"
  filterString="10"
  if(filterKey && filterString) {
    try{
      checkValidInputs(filterKey, filterString)
      switch(filterKey){
        case "id":
          return filterById(sampleData, filterString)
        case "title":
          return filterByTitle(sampleData, filterString)
        case "author_name":
          return filterByAuthor(sampleData, filterString)
        case "committer_name":
          return filterByCommitter(sampleData, filterString)
        case "committed_date":
          return filterByDate(sampleData, filterString)
        default:
          return sampleData
      }
      }
    catch(e){
      console.log("No data found, check if filter inputs are correct" + "\n" + e)
      return []
    }
  }
  return sampleData
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
        let data: CommitItem[] = getPropValues("", "")
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