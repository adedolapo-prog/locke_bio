export interface IResponse {
  status: number;
  message: string;
  data?: Record<string, any>;
}

export const responseModel = (name: string, response: any) => {
  return {
    [`${name}Product`]: response.product,
    [`${name}Quantity`]: response.quantity,
    [`${name}CustomerInfo`]: {
      [`${name}CustName`]: response.customerInfo.custName,
      [`${name}CustAddress`]: response.customerInfo.custAddress,
      [`${name}CustCity`]: response.customerInfo.custCity,
      [`${name}CustState`]: response.customerInfo.custState,
      [`${name}CustZipcode`]: response.customerInfo.custZipcode,
      [`${name}CustCountry`]: response.customerInfo.custCountry,
    },
  };
};
