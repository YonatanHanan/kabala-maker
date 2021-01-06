import { TextField } from "@material-ui/core";
import React, { useState } from "react";
import hebrew from "../../../hebrew";
export default function BusinessNumber() {
  const [businessNumber, setBusinessNumber] = useState<string>("");

  function handleChange(event: React.ChangeEvent<{ value: string }>) {
    setBusinessNumber(event.target.value);
  }

  return (
    <TextField
      id="standard-name"
      label={hebrew.BusinessNumberHeb}
      value={businessNumber}
      onChange={handleChange}
      style={{ direction: "rtl", margin: "0.5em" }}
    />
  );
}
