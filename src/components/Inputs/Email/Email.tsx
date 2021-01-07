import React, { useState } from "react";
import hebrew from "../../../hebrew";
import { InputNames, InputTypes, IOnChange } from "../../../types/input";
import RTLTextField from "../../BasicTextField/BasicTextField";
export default function Email(props: IOnChange) {
  const [email, setEmail] = useState<string>("");

  function handleChange(event: React.ChangeEvent<{ value: string }>) {
    setEmail(event.target.value);
    props.onChange(InputNames.Email, InputTypes.Info, event.target.value);
  }

  return (
    <RTLTextField
      id="Email-input"
      label={hebrew.EmailHeb}
      value={email}
      onChange={handleChange}
      style={{ width: "100%" }}
    />
  );
}
