import { useState, useEffect} from 'react';
import Button from '@mui/material/Button';
import { Box } from "@mui/system"
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import TextField from '@mui/material/TextField';
import { Container } from '@mui/material';

export interface FilterFormProps {
  handleChangeFilterType?(): (value: string) => void;
  handleChangeFilterValue?(): (value: string) => void;
  filterType?: string;
  filterValue?: string;
  //
}

export default function FilterFormCommit(props: FilterFormProps) {
  
  useEffect(()=>{
    console.log("useEffect");
    console.log(props.filterType);
    console.log(props.filterValue);
  })

  const sendFilterValues = () => {
    console.log(props.filterType);
    console.log(props.filterValue);
    console.log("button");
  };

  return (
    <Box minWidth={"100%"} display="inline-flex" alignItems={"center"}>
      <Box minWidth={"30%"} >
        <FormControl fullWidth >
          <InputLabel>Filtertype</InputLabel>
          <Select
          value={props.filterType}
          label="Filtertype"
          onChange={props.handleChangeFilterType}
          >
            <MenuItem value={"title"}>Title</MenuItem>
            <MenuItem value={"author_name"}>Author</MenuItem>
            <MenuItem value={"commiter_name"}>Committer</MenuItem>
            <MenuItem value={"committed_date"}>Date</MenuItem>
          </Select>
        </FormControl>
      </Box>
      <Box minWidth={"70%"} >
        <TextField
          fullWidth
          label="Value"
          type="text"
          onChange={props.handleChangeFilterValue}
        />
      </Box>

      <Box justifyContent="flex-end" ml={1}>
          <Button variant="contained"
            onClick={sendFilterValues}
          >
          Filter
          </Button>
      </Box>
        
  </Box>
  );
}
