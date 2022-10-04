import {useState} from 'react';
import Button from '@mui/material/Button';
import {Box} from "@mui/system"
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import TextField from '@mui/material/TextField';
import '../component-css/FilterForms.css';

export interface FilterFormProps {
    handleClick: (filterType: string, filterValue: string) => void;
}

export default function FilterFormIssue(props: FilterFormProps) {
    const [filterType, setFilterType] = useState('title')
    const [filterValue, setFilterValue] = useState('')

    return (
        <Box id="boxFilter" minWidth={"100%"} display="inline-flex" alignItems={"center"}>
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
                        <MenuItem value={"description"}>Description</MenuItem>
                        <MenuItem value={"state"}>State</MenuItem>
                        <MenuItem value={"created_at"}>Created at</MenuItem>
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

            <Box id="filterIssueBtn"justifyContent="flex-end" ml={1}>
                <Button variant="contained"
                        onClick={() => props.handleClick(filterType, filterValue)}
                >
                    Filter
                </Button>
            </Box>

        </Box>
    );
}
