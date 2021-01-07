import { InputNames } from "./types/input";

let hebrew = {
  BusinessNameHeb: "שם העסק",
  HeaderHeb: "יוצר קבלות",
  AddressHeb: "כתובת",
  ContactInfoHeb: "מספר טלפון ופקס",
  EmailHeb: "כתובת אימייל",
  BusinessNumberHeb: "ע.פ/ח.פ",
  AccordionDetailsBusiness: "פרטי העסק",
};

export const DefaultInfoPlaceHolder = {
  businessName: "שם העסק: ",
  address: "כתובת העסק: ",
  contactInfo: "מספר טלפון: ",
  email: "כתובת מייל: ",
  businessNumber: "ע.פ/ח.פ: ",
} as Record<InputNames, any>;

export default hebrew;
