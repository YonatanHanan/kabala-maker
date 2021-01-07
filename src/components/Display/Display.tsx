import { Box, Divider, Grid, Paper } from "@material-ui/core";
import React from "react";
import { InputNames } from "../../types/input";
import ContactInfo from "../Outputs/ContactInfo/ContactInfo";
import Address from "../Outputs/Address/Address";
import BusinessName from "../Outputs/BusinessName/BusinessName";
import Email from "../Outputs/Email/Email";
import BusinessNumber from "../Outputs/BusinessNumber/BusinessNumber";
import useStyles from "./Display.style";

type DisplayProps = {
  info: Record<InputNames, any>;
};

export default function Display(props: DisplayProps) {
  console.log("display", props);
  const classes = useStyles();

  return (
    <Paper className={classes.wrapper}>
      <BusinessName businessName={props.info.businessName} />
      <Address address={props.info.address} />
      <ContactInfo contactInfo={props.info.contactInfo} />
      <Grid
        container
        direction="row-reverse"
        justify="space-between"
        alignItems="center">
        <Email email={props.info.email} />
        <BusinessNumber businessNumber={props.info.businessNumber} />
      </Grid>
      <Divider />
    </Paper>
  );
}
