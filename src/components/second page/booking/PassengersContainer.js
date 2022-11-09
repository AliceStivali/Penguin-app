import { useParams } from "react-router-dom";
import { PassengerDetails } from "../booking/PassengerDetails";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useState, Fragment } from "react";

export function PassengersContainer() {
  const { adult, child } = useParams();
  const passengers = Number(adult) + Number(child);
  const [activeStep, setActiveStep] = useState(0);
  const [completed, setCompleted] = useState({});
  const steps = [];

  function passengerNumber() {
    for (let index = 0; index < passengers; index++) {
      steps.push(<PassengerDetails />);
    }
  }
  passengerNumber();
  const totalSteps = () => {
    return steps.length;
  };

  const completedSteps = () => {
    return Object.keys(completed).length;
  };

  const isLastStep = () => {
    return activeStep === totalSteps() - 1;
  };

  const allStepsCompleted = () => {
    return completedSteps() === totalSteps();
  };

  const handleNext = () => {
    const newActiveStep =
      isLastStep() && !allStepsCompleted()
        ? steps.findIndex((step, i) => !(i in completed))
        : activeStep + 1;
    setActiveStep(newActiveStep);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStep = (step) => () => {
    setActiveStep(step);
  };

  const handleComplete = () => {
    const newCompleted = completed;
    newCompleted[activeStep] = true;
    setCompleted(newCompleted);
    handleNext();
  };

  const handleReset = () => {
    setActiveStep(0);
    setCompleted({});
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Stepper nonLinear activeStep={activeStep}>
        <Typography>
          {completedSteps() === totalSteps()
            ? "Done!"
            : `Passenger ${activeStep + 1}`}
        </Typography>
      </Stepper>
      <div>
        {allStepsCompleted() ? (
          <Fragment>
            <Typography sx={{ mt: 2, mb: 1 }}>
              All passengers details saved ✅ Please go next step!
            </Typography>
            <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
              <Box sx={{ flex: "1 1 auto" }} />
              <Button onClick={handleReset}>Reset</Button>
            </Box>
          </Fragment>
        ) : (
          <Fragment>
            <Typography sx={{ mt: 2, mb: 1, py: 1 }}>
              {steps[activeStep]}
            </Typography>
            <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
              <Button
                color="inherit"
                disabled={activeStep === 0}
                onClick={handleBack}
                sx={{ mr: 1 }}
              >
                Back
              </Button>
              <Box sx={{ flex: "1 1 auto" }} />
              {activeStep !== steps.length &&
                (completed[activeStep] ? (
                  <Typography
                    variant="caption"
                    sx={{ display: "inline-block" }}
                  >
                    Step {activeStep + 1} already completed
                  </Typography>
                ) : (
                  <Button onClick={handleComplete}>
                    {completedSteps() === totalSteps() - 1
                      ? "Finish"
                      : "Next Passenger"}
                  </Button>
                ))}
            </Box>
          </Fragment>
        )}
      </div>
    </Box>
  );
}
