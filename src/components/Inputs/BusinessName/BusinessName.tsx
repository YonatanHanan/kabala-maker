import { TextField } from "@material-ui/core";
import React, { useState } from "react";
import hebrew from "../../../hebrew";
export default function BusinessName() {
  const [businessName, setBusinessName] = useState<string>("");

  function handleChange(event: React.ChangeEvent<{ value: string }>) {
    setBusinessName(event.target.value);
  }

  return (
    <TextField
      id="standard-name"
      label={hebrew.BusinessNameHeb}
      value={businessName}
      onChange={handleChange}
      style={{ direction: "rtl", margin: "0.5em" }}
    />
  );
}
