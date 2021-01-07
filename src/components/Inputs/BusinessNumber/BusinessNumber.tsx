import { TextField } from "@material-ui/core";
import React, { useState } from "react";
import hebrew from "../../../hebrew";
import { InputNames, InputTypes, IOnChange } from "../../../types/input";
export default function BusinessNumber(props: IOnChange) {
  const [businessNumber, setBusinessNumber] = useState<string>("");

  function handleChange(event: React.ChangeEvent<{ value: string }>) {
    setBusinessNumber(event.target.value);
    props.onChange(
      InputNames.BusinessNumber,
      InputTypes.Info,
      event.target.value
    );
  }

  return (
    <TextField
      id="BusinessNumber-input"
      label={hebrew.BusinessNumberHeb}
      value={businessNumber}
      onChange={handleChange}
    />
  );
}
