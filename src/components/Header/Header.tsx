import { Typography } from "@material-ui/core";
import React from "react";
import hebrew from "../../hebrew";

export default function Header() {
  return <Typography variant="h2">{hebrew.HeaderHeb}</Typography>;
}
