import React, { useState } from "react";

interface AgeStepProps {
  cb: (field: string, value: number) => void;
}

const AgeStep: React.FC<AgeStepProps> = (props) => {
  const [age, setAge] = useState(1);
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
      <button onClick={() => props.cb("age", age)}>Next</button>
      <p>
        <text style={{ fontSize: 12 }}>
          For age between 0 and 1,select age as 1 year.
        </text>
      </p>
    </>
  );
};

export default AgeStep;
