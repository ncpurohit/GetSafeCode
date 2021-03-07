import React, { useState } from "react";

interface PersonalDetailsProps {
  cb: (field: string, value: string) => void;
}
const PersonalDetailsStep: React.FC<PersonalDetailsProps> = (props) => {
  const [fname, setFirstName] = useState("");
  const [lname, setLastName] = useState("");
  const checkTextInput = () => {
    //Check if first name is not empty
    if (!fname.trim()) {
      alert("Please Enter First Name");
      //console.warn("Please Enter First Name:");
      return;
    }
    //Check if last name is not empty
    if (!lname.trim()) {
      alert("Please Enter Last Name");
      return;
    }

    //Check if first name contains only alphabets using regex
    if (
      /[!@#$%^&*(),.?":{}|<>]/g.test(fname) ||
      //!/^[A-Z]/.test(fname) ||
      /\d+/g.test(fname)
    ) {
      alert("First name must contain only Alphabets");

      const createTwoButtonAlert = () =>
        Alert.alert(
          "Alert Title",
          "My Alert Msg",
          [
            {
              text: "Cancel",
              onPress: () => console.log("Cancel Pressed"),
              style: "cancel"
            },
            { text: "OK", onPress: () => console.log("OK Pressed") }
          ],
          { cancelable: false }
        );

      return;
    }

    //Check if last name contains only alphabets using regex
    if (
      /[!@#$%^&*(),.?":{}|<>]/g.test(lname) ||
      // !/^[A-Z]/.test(lname) ||
      /\d+/g.test(lname)
    ) {
      alert("Last name must contain only Alphabets");
      return;
    }

    //Display the first letter of first name and last name in upper case
    //and the rest of the string in lower case
    //user may not necessarily care about the format while inputting the data
    props.cb(
      "fullName",
      fname.charAt(0).toUpperCase() +
        fname.slice(1).toLowerCase() +
        " " +
        lname.charAt(0).toUpperCase() +
        lname.slice(1).toLowerCase()
    );
  };

  return (
    <>
      <div>
        First Name(*):{" "}
        <input
          type="name"
          placeholder="First Name"
          onChange={({ target: { value } }) => {
            setFirstName(value);
          }}
          value={fname}
        ></input>
      </div>
      <div>
        Last Name(*):{" "}
        <input
          type="name"
          placeholder="Last Name"
          onChange={({ target: { value } }) => {
            setLastName(value);
          }}
          value={lname}
        ></input>
      </div>
      <button
        onClick={() => {
          // props.firstName("name", fname);
          // props.cb("fullName", fname + " " + lname);
          checkTextInput();
        }}
      >
        Next
      </button>
      <div>
        <text style={{ fontSize: 12 }}>(* Mandatory Fields)</text>
      </div>
    </>
  );
};
export default PersonalDetailsStep;
