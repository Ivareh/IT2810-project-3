import {
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow
} from "@mui/material"
import React from "react";
import {IssueItem} from "../interface/DataFormat"


type CommitTableProps = { data: IssueItem[] }

class GitLabIssueTable extends React.Component<CommitTableProps> {


    render() {
        return (
            <TableContainer className="issueTable" component={Paper}
                            sx={{
                                width: 'inherit',
                                align: 'center',
                                marginTop: 4,
                                borderRadius: 2,
                                maxHeight: 700
                            }}>
                <Table id="iTable" aria-label="simple table" stickyHeader
                >
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
                                    sx={{
                                        '&:last-child td, &:last-child th': {border: 0},
                                    }}
                                >
                                    <TableCell
                                        style={{
                                            minWidth: 'auto',
                                            maxWidth: 70
                                        }}>{issue.title}

                                    </TableCell>
                                    <TableCell
                                        style={{
                                            minWidth: 'auto',
                                            maxWidth: 70
                                        }}>{issue.description}</TableCell>

                                    <TableCell
                                        style={{
                                            minWidth: 'auto',
                                            maxWidth: 70
                                        }}>{issue.state}</TableCell>
                                    <TableCell
                                        style={{
                                            minWidth: 'auto',
                                            maxWidth: 70
                                        }}
                                    >{issue.created_at.split("T")[0]}</TableCell>
                                </TableRow>
                        ))}
                    </TableBody>

                </Table>
            </TableContainer>
        )
    }
}


export default GitLabIssueTable