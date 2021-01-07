import { TextField, TextFieldProps } from "@material-ui/core";
import React from "react";
export default function RTLTextField(props: TextFieldProps) {
  return <TextField {...props} style={{ direction: "rtl", ...props.style }} />;
}
