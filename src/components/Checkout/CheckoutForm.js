import React, { useState } from "react";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import ShippingForm from "./forms/ShippingForm";
import PaymentForm from "./forms/PaymentForm";
import CheckoutSummary from "./CheckoutSummary";
import { Box } from "@material-ui/core";

function CheckoutForm() {
  const [activeStep, setActiveStep] = useState(0);

  const steps = ["Shipment details", "Payment details"];

  const handleNextStep = () => {
    setActiveStep(activeStep + 1);
    console.log(activeStep);
  };
  const handlePreviousStep = () => {
    setActiveStep(activeStep - 1);
    console.log(activeStep);
  };

  const renderForm = () => {
    if (activeStep === 0) return <ShippingForm />;
    if (activeStep === 1) return <PaymentForm />;
    if (activeStep === 2) return <CheckoutSummary />;
  };
  return (
    <>
      <Box width="60%" ml="auto" mr="auto">
        <Stepper activeStep={activeStep}>
          {steps.map((step) => (
            <Step key={step}>
              <StepLabel>{step}</StepLabel>
            </Step>
          ))}
        </Stepper>
      </Box>

      <div>
        {renderForm()}

        <Box width="40%" ml="auto" mr="auto">
          <Button disabled={activeStep === 0} onClick={handlePreviousStep}>
            Back
          </Button>

          <Button
            onClick={handleNextStep}
            disabled={activeStep >= steps.length}
          >
            {activeStep === steps.length - 1 ? "Finish" : "Next"}
          </Button>
        </Box>
      </div>
    </>
  );
}

export default CheckoutForm;
