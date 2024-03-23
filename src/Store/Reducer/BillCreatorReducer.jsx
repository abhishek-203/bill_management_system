import { ADD_CUSTOMER } from "../Actions/BillCreator";

const initialState = {
  customers: [],
};

const customerReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_CUSTOMER:
      return {
        ...state,
        customers: [...state.customers, action.payload],
      };
    default:
      return state;
  }
};

export default customerReducer;



