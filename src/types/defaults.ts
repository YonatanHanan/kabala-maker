import { makeStyles } from "@material-ui/core";
import { InputNames } from "./input";

export const DefaultInfo = {
  businessName: "",
  address: "",
  contactInfo: "",
  email: "",
  businessNumber: "",
} as Record<InputNames, any>;

export const TextAlignLeft = makeStyles({
  root: {
    textAlign: "left",
    direction: "ltr",
  },
});
