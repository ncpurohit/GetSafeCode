import React from "react";
import { Link } from "react-router-dom";

interface SummaryStepProps {
  collectedData: {
    email: string;
    age: number;
    fullName: string;
  };
}

const SummaryStep: React.FC<SummaryStepProps> = (props) => {
  return (
    <>
      <div>Email: {props.collectedData.email}</div>
      <div>Age: {props.collectedData.age} Year(s)</div>
      <div>Full Name: {props.collectedData.fullName}</div>
      <div>
        <Link to="/purchased=dev_ins">Purchase</Link>
      </div>
    </>
  );
};

export default SummaryStep;
