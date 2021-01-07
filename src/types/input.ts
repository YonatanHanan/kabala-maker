export enum InputNames {
  BusinessName = "businessName",
  Address = "address",
  ContactInfo = "contactInfo",
  Email = "email",
  BusinessNumber = "businessNumber",
}

export enum InputTypes {
  Info = "info",
  Data = "data",
  Footer = "footer",
}

export interface IOnChange {
  onChange: (name: InputNames, type: InputTypes, value: any) => void;
}
