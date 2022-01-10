import React from "react";
import {
  Box,
  TextField,
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
  Checkbox,
} from "@mui/material";
import styles from "../../css/Forms.module.css";
import { useFormContext, Controller } from "react-hook-form";

const checkBoxItems = [
  {
    id: 0,
    name: "Car",
  },
  {
    id: 1,
    name: "MotorBike",
  },
  {
    id: 2,
    name: "Bicycle",
  },
  {
    id: 3,
    name: "Boat",
  },
];

const StepOne = (props) => {
  const {
    control,
    getValues,
    formState: { errors },
  } = useFormContext();
  const handleChecked = (checked) => {
    const { modes: ids } = getValues();
    const newIds = ids?.includes(checked)
      ? ids?.filter((id) => id !== checked)
      : [...(ids ?? []), checked];
    return newIds;
  };
  return (
    <Box className={styles.box}>
      <Controller
        control={control}
        name="firstName"
        rules={{
          required: "This field is required.",
          minLength: { value: 4, message: "Minimum Length is 4" },
          maxLength: { value: 20, message: "Minimum Length is 20" },
        }}
        render={({ field }) => (
          <TextField
            id="outlined-basic"
            label="First-Name"
            variant="outlined"
            {...field}
            error={Boolean(errors?.firstName)}
            helperText={errors.firstName?.message}
          />
        )}
      />
      <Controller
        control={control}
        name="lastName"
        render={({ field }) => (
          <TextField
            id="outlined-basic"
            label="Last-Name"
            variant="outlined"
            {...field}
          />
        )}
      />
      <Controller
        control={control}
        name="email"
        render={({ field }) => (
          <TextField
            id="outlined-basic"
            label="Email"
            variant="outlined"
            {...field}
          />
        )}
      />

      <Controller
        control={control}
        name="age"
        render={({ field }) => (
          <TextField
            id="outlined-basic"
            label="Age"
            variant="outlined"
            {...field}
          />
        )}
      />

      <FormControl component="fieldset">
        <FormLabel component="legend">Gender</FormLabel>
        <Controller
          control={control}
          name="gender"
          // rules={{ required: "Gender is required field" }}
          render={({ field }) => (
            <RadioGroup {...field} name="radio-buttons-group">
              <FormControlLabel value="male" control={<Radio />} label="Male" />
              <FormControlLabel
                value="female"
                control={<Radio />}
                label="Female"
              />
              <FormControlLabel
                value="other"
                control={<Radio />}
                label="Other"
              />
            </RadioGroup>
          )}
        />
      </FormControl>
      {/* {errors.gender?.message} */}

      <FormControl>
        <FormLabel component="legend">Mode Of Transportation</FormLabel>
        <Controller
          name="modes"
          control={control}
          rules={{
            validate: (value) => value.length >= 2,
          }}
          render={({ field }) =>
            checkBoxItems.map((item) => (
              <FormControlLabel
                control={
                  <Checkbox
                    onChange={() => field.onChange(handleChecked(item.name))}
                    defaultChecked={
                      props.defaultChecked.includes(item.name) ? true : false
                    }
                  />
                }
                key={item.id}
                label={item.name}
                {...field}
              />
            ))
          }
        />
      </FormControl>
      {errors.modes ? (
        <p style={{ color: "red" }}>
          {errors.modes.type === "validate" ? "Select Minimum Two Mode" : null}
        </p>
      ) : null}
    </Box>
  );
};

export default StepOne;
