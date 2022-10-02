import {TableContainer, Table, TableHead, TableRow, TableBody, Paper, TableCell} from '@mui/material';  
import { useEffect, useState } from 'react';
import SampleCommitData from '../data/SampleCommitData'; 
import {CommitItem} from "../interface/DataFormat"
import "./GitLabDataTable.css"


function getPropValues(){
  let data : Array<CommitItem> = []
  let sampleData = SampleCommitData;
  sampleData.forEach((item) => {
    item.forEach((value) => {
      data.push(value)
    })
  })
  return data
}

/* Table, inspired by https://www.youtube.com/watch?v=qk2oY7W3fuY*/
function GitLabDataTable (){
  const [tableData, setTableData] = useState([]);
  
  useEffect (() => {
    let data : CommitItem[] = getPropValues()
    setTableData(data)
  },[])

  return (
    <TableContainer className="responsiveTable" component={Paper}>
        <Table className="table"aria-label="simple table" stickyHeader>
            <TableHead className="tableHead">
              <TableRow className="tableRow">
                <TableCell>Title</TableCell>
                <TableCell>Author name</TableCell>
                <TableCell className="toHide">Committer name</TableCell>
                <TableCell className="toHide" align='center'>Committed date</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {tableData.map((row => 
                  <TableRow 
                    key={row.id}
                    sx = { { '&:last-child td, &:last-child th': { border: 0 } }}
                  >
                    <TableCell width={500}>{row.title}</TableCell>
                    <TableCell>{row.author_name}</TableCell>
                    <TableCell>{row.committer_name}</TableCell>
                    <TableCell align='center'>{row.committed_date}</TableCell>
                  </TableRow>
                ))}
            </TableBody>
        </Table>
    </TableContainer>
  )
}


  

export default GitLabDataTable