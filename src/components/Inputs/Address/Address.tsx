import { TextField } from "@material-ui/core";
import React, { useState } from "react";
import hebrew from "../../../hebrew";
export default function Address() {
  const [address, setAddress] = useState<string>("");

  function handleChange(event: React.ChangeEvent<{ value: string }>) {
    setAddress(event.target.value);
  }

  return (
    <TextField
      id="standard-name"
      label={hebrew.AddressHeb}
      value={address}
      onChange={handleChange}
      style={{ direction: "rtl", width: "100%", margin: "0.5em" }}
    />
  );
}
