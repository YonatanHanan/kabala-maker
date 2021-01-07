import { TextField } from "@material-ui/core";
import React, { useState } from "react";
import hebrew from "../../../hebrew";
import { InputNames, InputTypes, IOnChange } from "../../../types/input";

export default function Address(props: IOnChange) {
  const [address, setAddress] = useState<string>("");

  function handleChange(event: React.ChangeEvent<{ value: string }>) {
    setAddress(event.target.value);
    props.onChange(InputNames.Address, InputTypes.Info, event.target.value);
  }

  return (
    <TextField
      id={`${InputNames.Address}-input`}
      label={hebrew.AddressHeb}
      value={address}
      onChange={handleChange}
      style={{ width: "100%" }}
    />
  );
}
