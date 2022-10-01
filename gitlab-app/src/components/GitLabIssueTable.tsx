import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material"
import { useEffect, useState } from "react";
import { printData } from "./custom-functions/Print"
import { DataItem, IssueItem } from "./interface/DataFormat"


type IssueTableProps = {data: IssueItem[]}

function GitLabIssueTable(data: IssueTableProps) {
    const [issues, setIssues] = useState(Object.values(data).flat());


    // Sets data to the table once when the component is mounted
    useEffect(() => {
        setIssues(Object.values(data).flat())
    }, [])

  
    return (
    <TableContainer component={Paper} sx={{maxHeight: 400}}>
    <button onClick={() => printData()}>Print data size</button>
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
              {issues.map((issue =>
                    <TableRow
                        key={issue.id}
                        sx={{'&:last-child td, &:last-child th': {border: 0}}}
                    >
                        <TableCell width={600}>{issue.title}</TableCell>
                        <TableCell>{issue.description}</TableCell>
                        <TableCell>{issue.state}</TableCell>
                        <TableCell
                            align='center'>{issue.created_at}</TableCell>
                    </TableRow>
                ))}
            </TableBody>

      </Table>
  </TableContainer>
    )
}

export default GitLabIssueTable