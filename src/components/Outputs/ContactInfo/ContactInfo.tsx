import { Typography } from "@material-ui/core";
import React from "react";
import { DefaultInfoPlaceHolder } from "../../../hebrew";

type ContactInfoDisplayProps = {
  contactInfo: string;
};

export default function ContactInfo(props: ContactInfoDisplayProps) {
  return (
    <Typography variant="body1">
      {DefaultInfoPlaceHolder.contactInfo}
      {props.contactInfo}
    </Typography>
  );
}
