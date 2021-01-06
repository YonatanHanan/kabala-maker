import { Box, Grid, Paper } from "@material-ui/core";
import React from "react";
import Address from "../Inputs/Address/Address";
import BusinessName from "../Inputs/BusinessName/BusinessName";
import BusinessNumber from "../Inputs/BusinessNumber/BusinessNumber";
import ContactInfo from "../Inputs/ContactInfo/ContactInfo";
import Email from "../Inputs/Email/Email";

export default function Editor() {
  return (
    <Paper style={{ padding: "2em" }}>
      <Grid
        container
        direction="column"
        justify="space-between"
        alignItems="flex-end">
        <BusinessName />
        <Address />
        <ContactInfo />
        <Email />
        <BusinessNumber />
      </Grid>
    </Paper>
  );
}
