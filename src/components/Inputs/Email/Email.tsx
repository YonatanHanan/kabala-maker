import { TextField } from "@material-ui/core";
import React, { useState } from "react";
import hebrew from "../../../hebrew";
import { InputNames, InputTypes, IOnChange } from "../../../types/input";
export default function Email(props: IOnChange) {
  const [email, setEmail] = useState<string>("");

  function handleChange(event: React.ChangeEvent<{ value: string }>) {
    setEmail(event.target.value);
    props.onChange(InputNames.Email, InputTypes.Info, event.target.value);
  }

  return (
    <TextField
      id="Email-input"
      label={hebrew.EmailHeb}
      value={email}
      onChange={handleChange}
      style={{ width: "100%" }}
    />
  );
}
