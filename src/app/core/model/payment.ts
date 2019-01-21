
export interface PaymentDetails {
  description: string;
  value: PaymentValue;
}

export interface BillingAddress {
  address1: string;
  address2: string;
  countryCode: string;
  postalCode: string;
  state: string;
}

export interface CardExpiryDate {
  month: number;
  year: number;
}

export interface PaymentInstrument {
  cvc: string;
  type: string;
  cardNumber: string;
  cardHolderName: string;
  billingAddress?: BillingAddress;
  cardExpiryDate: CardExpiryDate;
}

export interface PaymentValue {
  currency: string;
  amount: number;
}

export interface Instruction extends PaymentDetails {
  paymentInstrument: PaymentInstrument;
}

export interface Payment {
  transactionReference: string;
  instruction: Instruction;
}
