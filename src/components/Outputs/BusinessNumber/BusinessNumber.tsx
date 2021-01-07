import { Typography } from "@material-ui/core";
import React from "react";
import { DefaultInfoPlaceHolder } from "../../../hebrew";

type BusinessNumberDisplayProps = {
  businessNumber: string;
};

export default function BusinessNumber(props: BusinessNumberDisplayProps) {
  return (
    <Typography variant="body1">
      {DefaultInfoPlaceHolder.businessNumber}
      {props.businessNumber}
    </Typography>
  );
}
