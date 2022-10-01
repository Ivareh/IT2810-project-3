import { useState, useEffect} from 'react';
import Button from '@mui/material/Button';
import { Box } from "@mui/system"
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import TextField from '@mui/material/TextField';

export default function BasicSelect() {
  const [filterType, setFilterType] = useState('10');
  const [filterValue, setFilterValue] = useState('');

  const handleChangeFilterValue = (event: { target: { value: React.SetStateAction<string>; }; }) => {
    const tmp = event.target.value;
    setFilterValue(tmp);
  };

  useEffect(()=>{
  });

  const handleChangeFilterType = (event: { target: { value: React.SetStateAction<string>; }; }) => {
    const tmp = event.target.value;
    setFilterType(tmp);
  };

  const sendFilterValues = () => {
    console.log(filterType);
    console.log(filterValue);
    console.log("button");
  };

  return (
    <>
    <Box sx={{ minWidth: 120 }}>
      <h2>Filter</h2>
      <FormControl fullWidth>
        <InputLabel>Filter</InputLabel>
        <Select
        value={filterType}
        onChange={handleChangeFilterType}
        >
          <MenuItem value={"id"}>Title</MenuItem>
          <MenuItem value={"author_name"}>Author</MenuItem>
          <MenuItem value={"commiter_name"}>Committer</MenuItem>
          <MenuItem value={"committed_date"}>Date</MenuItem>
        </Select>
      </FormControl>
      <TextField
        fullWidth
        label="Value"
        type="text"
        onChange={handleChangeFilterValue}
      />

    </Box><Box my={1} display="flex" justifyContent="flex-end">
        <Button variant="contained"
          onClick={sendFilterValues}
        >
        Filter
        </Button>
    </Box>
    </>
  );
}
