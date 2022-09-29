import {TableContainer, Table, TableHead, TableRow, TableBody, Paper, TableCell} from '@mui/material';  
import { useEffect, useState } from 'react';
 import SampleIssueData from './data/SampleIssueData'; 
import {CommitItem, IssueItem} from "./interface/DataFormat"


function getPropValues(){
  let data : Array<IssueItem> = []
  let sampleData = SampleIssueData;
  sampleData.forEach((item) => {
    item.forEach((value) => {
      data.push(value)
    })
  })
  return data
}

/* Table, inspired by https://www.youtube.com/watch?v=qk2oY7W3fuY*/
function GitLabIssueDataTable (){
  const [tableData, setTableData] = useState([]);
    const [issues, setIssues] = useState([]);



    function getIssues() {
        const issues = localStorage.getItem("issues");
        const initialValueIssues = JSON.parse(issues);
        return initialValueIssues || "";
    }



    function printData(): void {
        if (localStorage.getItem('commits') || localStorage.getItem('issues')) {
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
        let data: IssueItem[] = getPropValues()
        setTableData(data)
    }, [])


  return (
    <TableContainer component={Paper} sx={{maxHeight:400}}>
        <Table aria-label="simple table" stickyHeader>
            <TableHead>
              <TableRow>
                <TableCell>Title</TableCell>
                <TableCell>Description</TableCell>
                <TableCell>State</TableCell>
                <TableCell align='center'>Created at</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {tableData.map((row => 
                  <TableRow 
                    key={row.id}
                    sx = { { '&:last-child td, &:last-child th': { border: 0 } }}
                  >
                    <TableCell width={600}>{row.title}</TableCell>
                    <TableCell>{row.description}</TableCell>
                    <TableCell>{row.state}</TableCell>
                    <TableCell align='center'>{row.created_at}</TableCell>
                  </TableRow>
                ))}
            </TableBody>
        </Table>
    </TableContainer>
  )
}


  

export default GitLabIssueDataTable