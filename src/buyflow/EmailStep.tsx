import React, { useState } from "react";

interface EmailStepProps {
  cb: (field: string, value: string) => void;
}

const EmailStep: React.FC<EmailStepProps> = (props) => {
  const [email, setEmail] = useState("");
  const checkEmailInput = () => {
    //Check for the Name TextInput
    if (!email.trim()) {
      alert("Please Enter Email");
      //console.warn("Please Enter First Name:");
      return;
    }
    const regexp = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!regexp.test(email)) {
      alert("Email ID entered not in correct format");
      return;
    }
    props.cb("email", email);
  };

  return (
    <>
      <div>
        Email:{" "}
        <input
          type="email"
          placeholder="abc@email.com"
          onChange={({ target: { value } }) => {
            setEmail(value);
          }}
          value={email}
        ></input>
      </div>
      <button onClick={() => checkEmailInput()}>Next</button>
    </>
  );
};

export default EmailStep;
