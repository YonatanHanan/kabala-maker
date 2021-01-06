import { TextField } from "@material-ui/core";
import React, { useState } from "react";
import hebrew from "../../../hebrew";
export default function ContactInfo() {
  const [contactInfo, setContactInfo] = useState<string>("");

  function handleChange(event: React.ChangeEvent<{ value: string }>) {
    setContactInfo(event.target.value);
  }

  return (
    <TextField
      id="standard-name"
      label={hebrew.ContactInfoHeb}
      value={contactInfo}
      onChange={handleChange}
      style={{ direction: "rtl", width: "100%", margin: "0.5em" }}
    />
  );
}
