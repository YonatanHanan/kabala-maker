import { TextField } from "@material-ui/core";
import React, { useState } from "react";
import hebrew from "../../../hebrew";
export default function Email() {
  const [email, setEmail] = useState<string>("");

  function handleChange(event: React.ChangeEvent<{ value: string }>) {
    setEmail(event.target.value);
  }

  return (
    <TextField
      id="standard-name"
      label={hebrew.EmailHeb}
      value={email}
      onChange={handleChange}
      style={{ direction: "rtl", width: "100%", margin: "0.5em" }}
    />
  );
}
