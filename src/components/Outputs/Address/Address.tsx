import { Typography } from "@material-ui/core";
import React from "react";
import { DefaultInfoPlaceHolder } from "../../../hebrew";
import { TextAlignLeft } from "../../../types/defaults";

type AddressDisplayProps = {
  address: string;
};
export default function Address(props: AddressDisplayProps) {
  const classes = TextAlignLeft();

  return (
    <Typography variant="body1" className={classes.root}>
      {DefaultInfoPlaceHolder.address}
      {props.address}
    </Typography>
  );
}
