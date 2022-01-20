import { Box, TextField, Autocomplete, Typography } from "@mui/material";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import DesktopDatePicker from "@mui/lab/DesktopDatePicker";
import TimePicker from "@mui/lab/TimePicker";
import React, { useState } from "react";
import { countries, states, cities } from "../../utils/DropDownItems";
import { useFormContext, Controller } from "react-hook-form";

const StepTwo = () => {
  const newDate = new Date();
  const [value, setValue] = useState(new Date());
  const year = newDate.getFullYear();
  const month = newDate.getMonth();
  const day = newDate.getDate();
  const hour = newDate.getHours();
  const handleChange = (newValue) => {
    setValue(newValue);
  };
  const {
    control,
    formState: { errors },
  } = useFormContext();
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
      }}
    >
      <Typography sx={{ fontWeight: "bold", fontSize: "25px" }}>
        Address
      </Typography>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <DesktopDatePicker
          label="Date desktop"
          inputFormat="MM/dd/yyyy"
          value={value}
          maxDate={new Date(year + 1, month, day)}
          minDate={new Date(year - 1, month, day)}
          onChange={handleChange}
          renderInput={(params) => (
            <TextField sx={{ margin: "10px" }} {...params} />
          )}
        />
        <TimePicker
          label="Time"
          value={value}
          onChange={handleChange}
          minTime={new Date(year, month, day, hour - 2)}
          maxTime={new Date(year, month, day, hour + 2)}
          renderInput={(params) => (
            <TextField sx={{ margin: "10px" }} {...params} />
          )}
        />
      </LocalizationProvider>
      <Controller
        control={control}
        name="address1"
        render={({ field }) => (
          <TextField
            sx={{ margin: "10px" }}
            id="outlined-basic"
            label="Address-Line-1"
            variant="outlined"
            {...field}
          />
        )}
      />

      <Controller
        control={control}
        name="country"
        rules={{
          required: "Country is required.",
        }}
        render={({ field: { onChange, value } }) => (
          <Autocomplete
            sx={{ width: 390 }}
            onChange={(event, item) => {
              onChange(item);
            }}
            value={value}
            isOptionEqualToValue={(option, value) => option.id === value.id}
            options={countries}
            renderInput={(params) => (
              <TextField
                sx={{ margin: "10px" }}
                {...params}
                label="Choose a country"
                error={Boolean(errors?.country)}
                helperText={errors.country?.message}
              />
            )}
          />
        )}
      />

      <Controller
        control={control}
        name="state"
        render={({ field: { onChange, value } }) => (
          <Autocomplete
            sx={{ width: 390 }}
            onChange={(event, item) => {
              onChange(item);
            }}
            value={value}
            isOptionEqualToValue={(option, value) => option.id === value.id}
            options={states}
            renderInput={(params) => (
              <TextField
                sx={{ margin: "10px" }}
                {...params}
                label="Select State"
              />
            )}
          />
        )}
      />

      <Controller
        control={control}
        name="city"
        render={({ field: { onChange, value } }) => (
          <Autocomplete
            sx={{ width: 390 }}
            onChange={(event, item) => {
              onChange(item);
            }}
            value={value}
            isOptionEqualToValue={(option, value) => option.id === value.id}
            options={cities}
            renderInput={(params) => (
              <TextField
                sx={{ margin: "10px" }}
                {...params}
                label="Select City"
              />
            )}
          />
        )}
      />
    </Box>
  );
};

export default StepTwo;
