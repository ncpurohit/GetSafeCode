import React, { useState } from "react";
import AgeStep from "./AgeStep";
import EmailStep from "./EmailStep";
import PersonalDetailsStep from "./PersonalDetailsStep";
import SummaryStep from "./SummaryStep";

interface BuyflowProps {
  productId: ProductIds;
}

export enum ProductIds {
  devIns = "dev_ins"
}

const PRODUCT_IDS_TO_NAMES = {
  [ProductIds.devIns]: "Developer Insurance"
};

const Buyflow: React.FC<BuyflowProps> = (props) => {
  const [currentStep, setStep] = useState("email");
  const [collectedData, updateData] = useState({
    email: "",
    age: 0,
    fullName: ""
  });
  const getStepCallback = (nextStep: string) => (field: string, value: any) => {
    updateData({ ...collectedData, [field]: value });
    setStep(nextStep);
  };

  return (
    <>
      <h4>Buying {PRODUCT_IDS_TO_NAMES[props.productId]}</h4>
      {(currentStep === "email" && <EmailStep cb={getStepCallback("age")} />) ||
        (currentStep === "age" && (
          <AgeStep cb={getStepCallback("fullName")} />
        )) ||
        (currentStep === "fullName" && (
          <PersonalDetailsStep cb={getStepCallback("summary")} />
        )) ||
        (currentStep === "summary" && (
          <SummaryStep collectedData={collectedData} />
        ))}
    </>
  );
};

export default Buyflow;
