import { Paper } from "@material-ui/core";
import React from "react";
import { IOnChange } from "../../types/input";
import InfoEditor from "../InfoEditor/InfoEditor";
import useStyles from "./Editor.style";

export default function Editor(props: IOnChange) {
  const classes = useStyles();

  return (
    <Paper className={classes.wrapper}>
      <InfoEditor onChange={props.onChange} />
    </Paper>
  );
}
