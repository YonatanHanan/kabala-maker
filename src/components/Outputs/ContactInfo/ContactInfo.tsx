import { Typography } from "@material-ui/core";
import React from "react";
import { DefaultInfoPlaceHolder } from "../../../hebrew";
import { TextAlignLeft } from "../../../types/defaults";

type ContactInfoDisplayProps = {
  contactInfo: string;
};

export default function ContactInfo(props: ContactInfoDisplayProps) {
  const classes = TextAlignLeft();

  return (
    <Typography className={classes.root} variant="body1">
      {DefaultInfoPlaceHolder.contactInfo}
      {props.contactInfo}
    </Typography>
  );
}
