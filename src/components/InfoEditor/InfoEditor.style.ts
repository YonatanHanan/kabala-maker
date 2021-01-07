import { makeStyles } from "@material-ui/core";

export default makeStyles({
  grid: {
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "flex-end",
    "& > *": {
      margin: "0.2em",
    },
  },
});
