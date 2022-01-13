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
  Typography,
} from "@mui/material";
import { useFormContext, Controller } from "react-hook-form";
import { checkBoxItems } from "../../utils/DropDownItems";

const StepOne = (props) => {
  const {
    control,
    getValues,
    setError,
    clearErrors,
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
    <>
      <Typography sx={{ fontWeight: "bold", fontSize: "25px" }}>
        Personal Details
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start",
        }}
      >
        <Box sx={{ margin: "5px" }}>
          <Controller
            control={control}
            name="firstName"
            rules={{ required: "First Name is required." }}
            render={({ field }) => (
              <TextField
                sx={{ width: "49%" }}
                onChange={(e) => {
                  if (e.target.value.length < 4) {
                    setError("firstName", {
                      type: "validate",
                      message: "Minimum 4 Letters required in First-Name",
                    });
                    field.onChange(e);
                  } else {
                    field.onChange(e);
                    clearErrors("firstName");
                  }
                }}
                id="outlined-basic"
                label="First-Name"
                variant="outlined"
                value={field.value}
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
                sx={{ width: "49%", marginLeft: "20px" }}
                id="outlined-basic"
                label="Last-Name"
                variant="outlined"
                {...field}
              />
            )}
          />
        </Box>

        <Box sx={{ margin: "5px" }}>
          <Controller
            control={control}
            name="email"
            rules={{
              required: "Email is required.",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "invalid email address",
              },
            }}
            render={({ field }) => (
              <TextField
                sx={{ width: "49%" }}
                id="outlined-basic"
                label="Email"
                variant="outlined"
                {...field}
                error={Boolean(errors?.email)}
                helperText={errors.email?.message}
              />
            )}
          />

          <Controller
            control={control}
            name="age"
            render={({ field }) => (
              <TextField
                sx={{ width: "49%", marginLeft: "20px" }}
                id="outlined-basic"
                label="Age"
                variant="outlined"
                {...field}
              />
            )}
          />
        </Box>

        <FormControl
          component="fieldset"
          sx={{ width: "100px", margin: "5px" }}
        >
          <FormLabel component="legend">Gender</FormLabel>
          <Controller
            control={control}
            name="gender"
            rules={{ required: "Gender is required field" }}
            render={({ field }) => (
              <RadioGroup {...field} name="radio-buttons-group">
                <FormControlLabel
                  value="male"
                  control={<Radio />}
                  label="Male"
                />
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
        {errors.gender ? (
          <p
            style={{
              color: "red",
              margin: "0px",
              padding: "0px 0px 0px 10px",
              fontSize: "14px",
            }}
          >
            {errors.gender.message}
          </p>
        ) : null}

        <FormControl sx={{ width: "200px", margin: "5px" }}>
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
          <p
            style={{
              color: "red",
              margin: "0px",
              padding: "0px 0px 0px 10px",
              fontSize: "14px",
            }}
          >
            {errors.modes.type === "validate"
              ? "Select Minimum Two Mode"
              : null}
          </p>
        ) : null}
      </Box>
    </>
  );
};

export default StepOne;
