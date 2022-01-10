import { Box, TextField, Autocomplete } from "@mui/material";
import React from "react";
import styles from "../../css/Forms.module.css";
import { countries, states, cities } from "../../utils/DropDownItems";
import { useFormContext, Controller } from "react-hook-form";

const StepTwo = () => {
  const {
    control,
    formState: { errors },
  } = useFormContext();
  return (
    <Box className={styles.box}>
      <Controller
        control={control}
        name="address1"
        render={({ field }) => (
          <TextField
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
            sx={{ width: 300 }}
            onChange={(event, item) => {
              onChange(item.label);
            }}
            value={value}
            isOptionEqualToValue={(option, value) => option.id === value.id}
            options={countries}
            renderInput={(params) => (
              <TextField
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
            sx={{ width: 300 }}
            onChange={(event, item) => {
              onChange(item.label);
            }}
            value={value}
            isOptionEqualToValue={(option, value) => option.id === value.id}
            options={states}
            renderInput={(params) => (
              <TextField {...params} label="Select State" />
            )}
          />
        )}
      />

      <Controller
        control={control}
        name="city"
        render={({ field: { onChange, value } }) => (
          <Autocomplete
            sx={{ width: 300 }}
            onChange={(event, item) => {
              onChange(item.label);
            }}
            value={value}
            isOptionEqualToValue={(option, value) => option.id === value.id}
            options={cities}
            renderInput={(params) => (
              <TextField {...params} label="Select City" />
            )}
          />
        )}
      />
    </Box>
  );
};

export default StepTwo;
