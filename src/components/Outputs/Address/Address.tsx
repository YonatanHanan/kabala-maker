import { Typography } from "@material-ui/core";
import React from "react";
import { DefaultInfoPlaceHolder } from "../../../hebrew";

type AddressDisplayProps = {
  address: string;
};
export default function Address(props: AddressDisplayProps) {
  return (
    <Typography variant="body1">
      {DefaultInfoPlaceHolder.address}
      {props.address}
    </Typography>
  );
}
