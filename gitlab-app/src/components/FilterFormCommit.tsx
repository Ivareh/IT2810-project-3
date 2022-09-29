import * as React from 'react';
import Button from '@mui/material/Button';
import { Box } from "@mui/system"
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import TextField from '@mui/material/TextField';

export default function BasicSelect() {

 /* const handleChange = (event) => {
    setAge(event.target.value);
  };
  */

  return (
    <>
    <Box sx={{ minWidth: 120 }}>
      <h2>Filter</h2>
      <FormControl fullWidth>
        <InputLabel>Filter</InputLabel>
        <Select
        >
          <MenuItem value={10}>Title</MenuItem>
          <MenuItem value={20}>Author</MenuItem>
          <MenuItem value={30}>Committer</MenuItem>
          <MenuItem value={40}>Before</MenuItem>
          <MenuItem value={50}>After</MenuItem>
        </Select>
      </FormControl>
      <TextField id="outlined-search"
        fullWidth
        label="Value"
        type="text" />

    </Box><Box my={1} display="flex" justifyContent="flex-end">
        <Button variant="contained">Filter</Button>
    </Box>
    </>
  );
}
