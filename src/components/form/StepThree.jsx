import React from "react";
import { Box, Autocomplete, TextField, Typography } from "@mui/material";
import { useFormContext, Controller } from "react-hook-form";
import { chip } from "../../utils/DropDownItems";

const StepThree = (props) => {
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
        Health and Fitness
      </Typography>
      <Controller
        name="chip"
        control={control}
        rules={{
          required: "Field is Required",
          validate: (value) => value.length >= 3 || "Select at least 3 values",
        }}
        render={({ field: { onChange } }) => (
          <Autocomplete
            multiple
            sx={{ width: 390 }}
            onChange={(event, data) => onChange(data)}
            options={chip}
            defaultValue={[
              props.defaultChip[0],
              props.defaultChip[1],
              props.defaultChip[2],
            ]}
            getOptionLabel={(option) => (option ? option.label : "")}
            renderInput={(params) => (
              <TextField
                sx={{ margin: "10px" }}
                {...params}
                label="Chip"
                placeholder="Favorites"
                error={Boolean(errors?.chip)}
                helperText={errors.chip?.message}
              />
            )}
          />
        )}
      />
    </Box>
  );
};

export default StepThree;
