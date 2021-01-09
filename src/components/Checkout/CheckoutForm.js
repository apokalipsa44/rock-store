import React, { useState, useContext } from "react";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import Button from "@material-ui/core/Button";
import ShippingForm from "./forms/ShippingForm";
import PaymentForm from "./forms/PaymentForm";
import CheckoutSummary from "./CheckoutSummary";
import { Container } from "@material-ui/core";
import { StateContext } from "../../utils/Context";

function CheckoutForm() {
  const [activeStep, setActiveStep] = useState(0);
  const { checkoutToken } = useContext(StateContext);
  const [shippingData, setShippingData] = useState({});
  const steps = ["Shipment details", "Payment details"];

  const handleNextStep = () => {
    setActiveStep(activeStep + 1);
    console.log(activeStep);
  };
  const handlePreviousStep = () => {
    setActiveStep(activeStep - 1);
    console.log(activeStep);
  };

  const submitAddressForm = (data) => {
    setShippingData(data);
    console.log("address submitted", data);
    handleNextStep();
  };
  const submitPaymentForm = () => {
    console.log("payment submitted");
    handleNextStep();
  };

  const renderForm = () => {
    if (activeStep === 0)
      return (
        <ShippingForm
          checkoutToken={checkoutToken}
          onSubmit={submitAddressForm}
        />
      );
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
        {activeStep === 0 && (
          <Button
            form="shippingForm"
            type="submit"
            disabled={activeStep >= steps.length}
          >
            Next
          </Button>
        )}
        {activeStep === 1 && (
          <Button
            onClick={submitPaymentForm}
            disabled={activeStep >= steps.length}
          >
            Finish
          </Button>
        )}
        {activeStep >= 2 && (
          <Button
            onClick={handleNextStep}
            disabled={activeStep >= steps.length}
          >
            Finish
          </Button>
        )}
      </div>
    </Container>
  );
}

export default CheckoutForm;
