import React from "react";
import { Box, Autocomplete, TextField } from "@mui/material";
import { useFormContext, Controller } from "react-hook-form";
import { chip } from "../../utils/DropDownItems";
import styles from "../../css/Forms.module.css";

const StepThree = () => {
  const {
    control,
    formState: { errors },
  } = useFormContext();
  return (
    <Box className={styles.box}>
      <Controller
        name="chip"
        control={control}
        rules={{
          validate: (value) => value.length >= 3,
        }}
        render={({ field: { onChange } }) => (
          <Autocomplete
            multiple
            sx={{ width: 300 }}
            onChange={(event, data) => onChange(data)}
            options={chip}
            getOptionLabel={(option) => (option ? option.label : "")}
            renderInput={(params) => (
              <TextField {...params} label="Chip" placeholder="Favorites" />
            )}
          />
        )}
      />
      {errors.chip ? (
        <p style={{ color: "red" }}>
          {errors.chip.type === "validate" ? "Put Atleast Three Values" : null}
        </p>
      ) : null}
    </Box>
  );
};

export default StepThree;
