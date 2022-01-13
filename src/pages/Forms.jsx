import React, { useState } from "react";
import { Box, Button } from "@mui/material";
import profileStyles from "../css/Profile.module.css";
import styles from "../css/Forms.module.css";
import PageHeader from "../components/pages/PageHeader";
import DividerHorizontal from "../components/pages/DividerHorizontal";
import StepOne from "../components/form/StepOne";
import StepTwo from "../components/form/StepTwo";
import StepThree from "../components/form/StepThree";
import { useForm, FormProvider } from "react-hook-form";
import { chip } from "../utils/DropDownItems";

const Forms = () => {
  const [defaultChecked, setDefaultChecked] = useState(["Car", "MotorBike"]);
  const defaultChip = chip;
  const [activeStep, setActiveStep] = useState(0);
  const getStepContent = (step) => {
    switch (step) {
      case 0:
        return <StepOne defaultChecked={defaultChecked} />;
      case 1:
        return <StepTwo />;
      case 2:
        return <StepThree defaultChip={defaultChip} />;
      default:
        return "Thank You";
    }
  };
  const handleNext = () => {
    setActiveStep(activeStep + 1);
  };
  const handlePrev = () => {
    setActiveStep(activeStep - 1);
  };
  const onSubmit = (data) => {
    setDefaultChecked([]);
    data.modes?.map((val) => setDefaultChecked((prev) => [...prev, val]));
    console.log(data);
    handleNext();
  };
  const methods = useForm({
    mode: "all",
    defaultValues: {
      firstName: "John",
      lastName: "Doe",
      email: "addwebsolution@gmail.com",
      gender: "",
      age: "",
      modes: defaultChecked,
      address1: "",
      country: "",
      state: "",
      city: "",
      chip: defaultChip,
    },
  });
  return (
    <Box className={profileStyles.box}>
      <Box>
        <PageHeader title="Sign-Up Form" />
        <DividerHorizontal />
      </Box>
      <Box className={styles.box}>
        <FormProvider {...methods}>
          <form
            onSubmit={methods.handleSubmit(onSubmit)}
            className={styles.form}
          >
            {getStepContent(activeStep)}
            {activeStep > 0 && activeStep <= 2 && (
              <Button
                variant="contained"
                onClick={handlePrev}
                sx={{ margin: "5px" }}
              >
                Prev
              </Button>
            )}

            {activeStep < 2 && (
              <Button
                type="submit"
                variant="contained"
                color="primary"
                sx={{ margin: "5px" }}
              >
                Next
              </Button>
            )}

            {activeStep === 2 && (
              <Button
                type="submit"
                variant="contained"
                color="primary"
                sx={{ margin: "5px" }}
              >
                Finish
              </Button>
            )}
          </form>
        </FormProvider>
      </Box>
    </Box>
  );
};

export default Forms;
