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
import {CommitItem} from "../interface/DataFormat"


type CommitTableProps = { data: CommitItem[] }

class GitLabCommitTable extends React.Component<CommitTableProps> {


    render() {


        return (
            <TableContainer className="commitTable" component={Paper}
                            sx={{
                                width: 'inherit',
                                align: 'center',
                                marginTop: 4,
                                borderRadius: 2,
                                maxHeight: 700

                            }}>
                <Table id="cTable" aria-label="simple table" stickyHeader>
                    <TableHead

                    >
                        <TableRow>
                            <TableCell>Title</TableCell>
                            <TableCell>Author name</TableCell>
                            <TableCell>Committer name</TableCell>
                            <TableCell align='center'>Committed date</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody sx={{}}>
                        {this.props.data.map((commit =>
                                <TableRow
                                    key={commit.id}
                                    sx={{'&:last-child td, &:last-child th': {border: 0}}}
                                >
                                    <TableCell
                                        style={{
                                            minWidth: 5,
                                            maxWidth: 'auto',


                                        }}


                                    >{commit.title}</TableCell>
                                    <TableCell style={{
                                        maxWidth: 5
                                    }}>{commit.author_name}</TableCell>
                                    <TableCell
                                        style={{
                                            maxWidth: 1
                                        }}
                                    >{commit.committer_name}</TableCell>
                                    <TableCell style={{
                                        maxWidth: 1
                                    }}

                                    >{commit.committed_date.split("T")[0]}</TableCell>
                                </TableRow>
                        ))}
                    </TableBody>

                </Table>
            </TableContainer>
        )
    }
}

export default GitLabCommitTable