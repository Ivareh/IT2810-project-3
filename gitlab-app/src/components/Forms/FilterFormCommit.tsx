import { useState } from 'react';
import { Box } from "@mui/system"
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import TextField from '@mui/material/TextField';
import Button from "@mui/material/Button";
import '../component-css/FilterForms.css';

export interface FilterFormProps {
    handleClick: (filterType: string, filterValue: string) => void;
}

// Form for commit filtering
export default function FilterFormCommit(props: FilterFormProps) {
    const [filterType, setFilterType] = useState('author_name')
    const [filterValue, setFilterValue] = useState('')

    return (
        <Box id="boxCommits"
            sx={{
                display: 'inline-flex',
            }}
            minWidth={"100%"} display="inline-flex" alignItems={"center"}>
            <Box minWidth={"40%"}>
                <FormControl fullWidth>
                    <InputLabel>Filtertype</InputLabel>
                    <Select
                        value={filterType}
                        label="Filtertype"
                        onChange={(e) => {
                            setFilterType(e.target.value as string)
                        }}
                    >
                        <MenuItem value={"title"}>Title</MenuItem>
                        <MenuItem value={"author_name"}>Author</MenuItem>
                        <MenuItem value={"committer_name"}>Committer</MenuItem>
                        <MenuItem value={"committed_date"}>Date</MenuItem>
                    </Select>

                </FormControl>
            </Box>
            <Box minWidth={"60%"}>
                <TextField
                    fullWidth
                    label="Value"
                    type="text"
                    onChange={(e) => {
                        setFilterValue(e.target.value as string)
                    }}
                />
            </Box>
            <Box id="filterCommitBtn" justifyContent="flex-end" ml={1}>
                <Button variant="contained"
                    sx={{}}
                    onClick={() => props.handleClick(filterType, filterValue)}
                >
                    Filter
                </Button>
            </Box>
        </Box>


    );
}
