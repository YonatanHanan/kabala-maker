import { Typography } from "@material-ui/core";
import React from "react";
import { DefaultInfoPlaceHolder } from "../../../hebrew";
import { TextAlignLeft } from "../../../types/defaults";

type BusinessNumberDisplayProps = {
  businessNumber: string;
};

export default function BusinessNumber(props: BusinessNumberDisplayProps) {
  const classes = TextAlignLeft();

  return (
    <Typography className={classes.root} variant="body1">
      {DefaultInfoPlaceHolder.businessNumber}
      {props.businessNumber}
    </Typography>
  );
}
