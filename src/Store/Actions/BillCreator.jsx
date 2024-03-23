export const ADD_CUSTOMER = 'ADD_CUSTOMER';

export const addCustomer = (customerData) => ({
  type: ADD_CUSTOMER,
  payload: customerData,
});
