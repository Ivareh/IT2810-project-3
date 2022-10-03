import { ClassNames } from "@emotion/react";
import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material"
import React from "react";
import { useEffect, useState } from "react";
import { getCommitData } from "../custom-functions/GetData";
import { printData } from "../custom-functions/Print"
import { IssueItem } from "../interface/DataFormat"


type CommitTableProps = {data: IssueItem[]}

class GitLabCommitTable extends React.Component<CommitTableProps> {

    render() {
      return (
      <TableContainer className="commitTable" component={Paper} sx={{maxHeight: 600}}>
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
              {this.props.data.map((issue =>
                    <TableRow
                        key={issue.id}
                        sx={{'&:last-child td, &:last-child th': {border: 0}}}
                    >
                        <TableCell width={600}>{issue.title}</TableCell>
                        <TableCell>{issue.description}</TableCell>
                        <TableCell>{issue.state}</TableCell>
                        <TableCell
                            align='center' width={200}>{issue.created_at.split("T")[0]}</TableCell>
                    </TableRow>
                ))}
            </TableBody>

      </Table>
  </TableContainer>
    
      )
  }
}

export default GitLabCommitTable