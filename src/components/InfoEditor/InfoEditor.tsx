import { Grid } from "@material-ui/core";
import React from "react";
import { IOnChange } from "../../types/input";
import BusinessName from "../Inputs/BusinessName/BusinessName";
import Address from "../Inputs/Address/Address";
import BusinessNumber from "../Inputs/BusinessNumber/BusinessNumber";
import ContactInfo from "../Inputs/ContactInfo/ContactInfo";
import Email from "../Inputs/Email/Email";
import useStyles from "./InfoEditor.style";

export default function InfoEditor(props: IOnChange) {
  const classes = useStyles();

  return (
    <Grid container className={classes.grid}>
      <BusinessName onChange={props.onChange} />
      <Address onChange={props.onChange} />
      <ContactInfo onChange={props.onChange} />
      <Email onChange={props.onChange} />
      <BusinessNumber onChange={props.onChange} />
    </Grid>
  );
}
