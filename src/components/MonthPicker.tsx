import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
} from "@mui/material";
import { useState } from "react";

export const MonthPicker = () => {
  const [month, setMonth] = useState("");

  const handleChange = (event: SelectChangeEvent) => {
    setMonth(event.target.value as string);
  };
  return (
    <FormControl sx={{ width: "150px" }} size="small">
      <InputLabel id="month-select-inpuy-label">Jump to Month</InputLabel>
      <Select
        labelId="month-select-label"
        id="month-simple-select"
        value={month}
        label="Jump to Month"
        onChange={handleChange}
      >
        <MenuItem value={1}>January</MenuItem>
        <MenuItem value={2}>February</MenuItem>
        <MenuItem value={3}>March</MenuItem>
        <MenuItem value={4}>April</MenuItem>
        <MenuItem value={5}>May</MenuItem>
        <MenuItem value={6}>June</MenuItem>
        <MenuItem value={7}>July</MenuItem>
        <MenuItem value={8}>August</MenuItem>
        <MenuItem value={9}>September</MenuItem>
        <MenuItem value={10}>October</MenuItem>
        <MenuItem value={11}>November</MenuItem>
        <MenuItem value={12}>December</MenuItem>
      </Select>
    </FormControl>
  );
};
