import { Typography } from "@material-ui/core";
import React from "react";
import { DefaultInfoPlaceHolder } from "../../../hebrew";

type EmailDisplayProps = {
  email: string;
};

export default function Email(props: EmailDisplayProps) {
  return (
    <Typography variant="body1">
      {DefaultInfoPlaceHolder.email}
      {props.email}
    </Typography>
  );
}
