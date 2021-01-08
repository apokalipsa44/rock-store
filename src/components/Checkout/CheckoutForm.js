import React, { useState, useContext } from "react";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import Button from "@material-ui/core/Button";
import ShippingForm from "./forms/ShippingForm";
import PaymentForm from "./forms/PaymentForm";
import CheckoutSummary from "./CheckoutSummary";
import {  Container } from "@material-ui/core";
import { StateContext } from "../../utils/Context";

function CheckoutForm() {
  const [activeStep, setActiveStep] = useState(0);
  const {checkoutToken} = useContext(StateContext);

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
    if (activeStep === 0) return <ShippingForm checkoutToken={checkoutToken} />;
    if (activeStep === 1) return <PaymentForm />;
    if (activeStep === 2) return <CheckoutSummary />;
  };
  return (
    <Container>
      <Stepper activeStep={activeStep}>
        {steps.map((step) => (
          <Step key={step}>
            <StepLabel>{step}</StepLabel>
          </Step>
        ))}
      </Stepper>

      <div>
        {renderForm()}

        <Button disabled={activeStep === 0} onClick={handlePreviousStep}>
          Back
        </Button>

        <Button onClick={handleNextStep} disabled={activeStep >= steps.length}>
          {activeStep === steps.length - 1 ? "Finish" : "Next"}
        </Button>
      </div>
    </Container>
  );
}

export default CheckoutForm;
