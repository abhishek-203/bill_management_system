import { ADD_CUSTOMER } from '../Actions/CustomerAction';

const initialState = {
    customers: []
};

const CustomerReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_CUSTOMER:
            return {
                ...state,
                customers: [...state.customers, action.payload]
            };
        default:
            return state;
    }
};

export default CustomerReducer;
