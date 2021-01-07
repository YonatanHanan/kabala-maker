import { TextField } from "@material-ui/core";
import React, { useState } from "react";
import hebrew from "../../../hebrew";
import { InputNames, InputTypes, IOnChange } from "../../../types/input";
export default function ContactInfo(props: IOnChange) {
  const [contactInfo, setContactInfo] = useState<string>("");

  function handleChange(event: React.ChangeEvent<{ value: string }>) {
    setContactInfo(event.target.value);
    props.onChange(InputNames.ContactInfo, InputTypes.Info, event.target.value);
  }

  return (
    <TextField
      id="ContactInfo-input"
      label={hebrew.ContactInfoHeb}
      value={contactInfo}
      onChange={handleChange}
      style={{ width: "100%" }}
    />
  );
}
