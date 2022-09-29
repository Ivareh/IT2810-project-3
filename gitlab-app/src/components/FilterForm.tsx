import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import TextField from '@mui/material/TextField';

export default function BasicSelect() {
  const [age, setAge] = React.useState('');

 /* const handleChange = (event) => {
    setAge(event.target.value);
  };
  */

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Filter</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          label="Age"
          //onChange={handleChange}
        >
          <MenuItem value={10}>Author</MenuItem>
          <MenuItem value={20}>Title</MenuItem>
          <MenuItem value={30}>Before</MenuItem>
          <MenuItem value={40}>After</MenuItem>
        </Select>
      </FormControl>
      <TextField id="outlined-search"
                fullWidth
                label="Value"
                type="text"
                />

    </Box>
  );
}
