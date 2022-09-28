import {TableContainer, Table, TableHead, TableRow, TableBody, Paper, TableCell} from '@mui/material';  
import { useEffect, useState } from 'react';
 import SampleIssueData from './data/SampleIssueData'; 
import {IssueItem} from "./interface/DataFormat"


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
  
  useEffect (() => {
    let data : IssueItem[] = getPropValues()
    setTableData(data)
  },[])

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