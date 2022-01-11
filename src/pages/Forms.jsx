import React, { useState } from "react";
import { Box, Button } from "@mui/material";
import styles from "../css/Profile.module.css";
// import DividerHorizontal from "../components/pages/DividerHorizontal";
import PageHeader from "../components/pages/PageHeader";
import StepOne from "../components/form/StepOne";
import StepTwo from "../components/form/StepTwo";
import StepThree from "../components/form/StepThree";
import { useForm, FormProvider } from "react-hook-form";

const Forms = () => {
  const [defaultChecked, setDefaultChecked] = useState([]);
  const [activeStep, setActiveStep] = useState(0);
  const getStepContent = (step) => {
    switch (step) {
      case 0:
        return <StepOne defaultChecked={defaultChecked} />;
      case 1:
        return <StepTwo />;
      case 2:
        return <StepThree />;
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
    data.modes?.map((val) => setDefaultChecked((prev) => [...prev, val]));
    console.log(data);
    handleNext();
  };
  const methods = useForm({
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      gender: "",
      age: "",
      modes: defaultChecked,
      address1: "",
      country: "",
      state: "",
      city: "",
      chip: "",
    },
  });
  return (
    <Box className={styles.box}>
      <Box>
        <PageHeader title="Sign-Up Form" />
        {/* <DividerHorizontal /> */}
      </Box>
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(onSubmit)}>
          {getStepContent(activeStep)}
          {activeStep > 0 && activeStep <= 2 && (
            <Button variant="contained" onClick={handlePrev}>
              Prev
            </Button>
          )}

          {activeStep < 2 && (
            <Button type="submit" variant="contained" color="primary">
              Next
            </Button>
          )}

          {activeStep === 2 && (
            <Button type="submit" variant="contained" color="primary">
              Finish
            </Button>
          )}
        </form>
      </FormProvider>
    </Box>
  );
};

export default Forms;
