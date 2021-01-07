import { Typography } from "@material-ui/core";
import React from "react";
import { DefaultInfoPlaceHolder } from "../../../hebrew";

type BusinessNameDisplayProps = {
  businessName: string;
};

export default function BusinessName(props: BusinessNameDisplayProps) {
  return (
    <Typography variant="h4">
      {DefaultInfoPlaceHolder.businessName}
      {props.businessName}
    </Typography>
  );
}
