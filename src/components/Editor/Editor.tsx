import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Paper,
} from "@material-ui/core";
import React from "react";
import { IOnChange } from "../../types/input";
import InfoEditor from "../InfoEditor/InfoEditor";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import useStyles from "./Editor.style";
import hebrew from "../../hebrew";
export default function Editor(props: IOnChange) {
  const classes = useStyles();

  return (
    <Paper className={classes.wrapper}>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          id={hebrew.AccordionDetailsBusiness}>
          {hebrew.AccordionDetailsBusiness}
        </AccordionSummary>
        <AccordionDetails>
          <InfoEditor onChange={props.onChange} />
        </AccordionDetails>
      </Accordion>
    </Paper>
  );
}
