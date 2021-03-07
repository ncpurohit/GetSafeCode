import React, { useState } from "react";

interface AgeStepProps {
  cb: (field: string, value: number) => void;
}

const AgeStep: React.FC<AgeStepProps> = (props) => {
  const [age, setAge] = useState(1);
  const checkAge = () => {
    //Check if age entered is a proper number > 0
    if (age <= 0) {
      alert("Age must be greater than 0");
      //console.warn("Please Enter First Name:");
      return;
    }
    //Check if age entered is a number
    //Dont allow age like 12.4 or 12,4 depending on user key pad for number
    if (/[.,]/g.test(age.toString())) {
      alert("Age must be a whole Number");
      return;
    }
    props.cb("age", age);
  };
  return (
    <>
      <div>
        Age(In Years):{" "}
        <input
          type="number"
          min="1"
          onChange={({ target: { value } }) => {
            setAge(Number(value));
          }}
          value={age}
        ></input>
      </div>
      <button onClick={() => checkAge()}>Next</button>
      <div style={{ fontSize: 12 }}>
        For age between 0 and 1,select age as 1 year.
      </div>
    </>
  );
};

export default AgeStep;
