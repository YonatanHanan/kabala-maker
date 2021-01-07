import { Typography } from "@material-ui/core";
import React from "react";
import { DefaultInfoPlaceHolder } from "../../../hebrew";
import { TextAlignLeft } from "../../../types/defaults";

type EmailDisplayProps = {
  email: string;
};

export default function Email(props: EmailDisplayProps) {
  const classes = TextAlignLeft();

  return (
    <Typography className={classes.root} variant="body1">
      {DefaultInfoPlaceHolder.email}
      {props.email}
    </Typography>
  );
}
