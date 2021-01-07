import { Typography } from "@material-ui/core";
import React from "react";
import { DefaultInfoPlaceHolder } from "../../../hebrew";
import { TextAlignLeft } from "../../../types/defaults";

type BusinessNameDisplayProps = {
  businessName: string;
};

export default function BusinessName(props: BusinessNameDisplayProps) {
  const classes = TextAlignLeft();

  return (
    <Typography className={classes.root} variant="h4">
      {DefaultInfoPlaceHolder.businessName}
      {props.businessName}
    </Typography>
  );
}
