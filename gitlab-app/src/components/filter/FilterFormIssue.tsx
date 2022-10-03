import { useState, useEffect } from "react";
import Button from "@mui/material/Button";
import {Grid} from "@mui/material";
import { Box } from "@mui/system";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import TextField from "@mui/material/TextField";
import { Container } from "@mui/material";

export default function BasicSelect() {
  const [filterType, setFilterType] = useState("title");
  const [filterValue, setFilterValue] = useState("");

  const handleChangeFilterValue = (event: {
    target: { value: React.SetStateAction<string> };
  }) => {
    const tmp = event.target.value;
    setFilterValue(tmp);
  };

  useEffect(() => {});

  const handleChangeFilterType = (event: {
    target: { value: React.SetStateAction<string> };
  }) => {
    const tmp = event.target.value;
    setFilterType(tmp);
  };

  const sendFilterValues = () => {
    console.log(filterType);
    console.log(filterValue);
    console.log("button");
  };

  return (
    <Box
      minWidth={"100%"}
      display="inline-flex"
      alignItems={"center"}
      style={{ marginTop: "50px" }}
    >
      <h6
        style={{
          fontWeight: "bold",
          fontSize: "17px",
          marginRight: "40px",
          marginBottom: "0px",
        }}
      >
        Issues
      </h6>
      <Box minWidth={"65%"}>
        <FormControl fullWidth>
          <InputLabel>Filtertype</InputLabel>
          <Select
            value={filterType}
            label="Filtertype"
            variant="standard"
            onChange={handleChangeFilterType}
          >
            <MenuItem value={"title"}>Title</MenuItem>
            <MenuItem value={"description"}>Description</MenuItem>
            <MenuItem value={"state"}>State</MenuItem>
            <MenuItem value={"created_at"}>Created at</MenuItem>
          </Select>
        </FormControl>
      </Box>
      <Box minWidth={"65%"}>
        <TextField
          fullWidth
          label="Value"
          type="text"
          variant="standard"
          onChange={handleChangeFilterValue}
        />
      </Box>
      <Box justifyContent="flex-end" ml={1}>
        <Button variant="contained" onClick={sendFilterValues}>
          Filter
        </Button>
      </Box>
    </Box>
  );
}
