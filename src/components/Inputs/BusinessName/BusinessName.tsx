import { TextField } from "@material-ui/core";
import React, { useState } from "react";
import hebrew from "../../../hebrew";
import { InputNames, InputTypes, IOnChange } from "../../../types/input";

export default function BusinessName(props: IOnChange) {
  const [businessName, setBusinessName] = useState<string>("");

  function handleChange(event: React.ChangeEvent<{ value: string }>) {
    setBusinessName(event.target.value);
    props.onChange(
      InputNames.BusinessName,
      InputTypes.Info,
      event.target.value
    );
  }

  return (
    <TextField
      id="BusinessName-input"
      label={hebrew.BusinessNameHeb}
      value={businessName}
      onChange={handleChange}
    />
  );
}
