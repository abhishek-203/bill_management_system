// Define action types
export const ADD_CUSTOMER = 'ADD_CUSTOMER';

// Define action creator for adding customers
export const customers = (customer) => ({
    type: ADD_CUSTOMER,
    payload: customer
});

// CustomerActions.js

// Action Types
export const FETCH_CUSTOMERS_REQUEST = 'FETCH_CUSTOMERS_REQUEST';
export const FETCH_CUSTOMERS_SUCCESS = 'FETCH_CUSTOMERS_SUCCESS';
export const FETCH_CUSTOMERS_FAILURE = 'FETCH_CUSTOMERS_FAILURE';

// Action Creators
export const fetchCustomersRequest = () => ({
    type: FETCH_CUSTOMERS_REQUEST
});

export const fetchCustomersSuccess = (customers) => ({
    type: FETCH_CUSTOMERS_SUCCESS,
    payload: customers
});

export const fetchCustomersFailure = (error) => ({
    type: FETCH_CUSTOMERS_FAILURE,
    payload: error
});

// Async Action Creator: Fetch Customers
export const fetchCustomers = () => {
    return async (dispatch) => {
        dispatch(fetchCustomersRequest());
        try {
            // Make API call to fetch customers data
            const response = await fetch('api/customers'); // Replace 'api/customers' with your actual API endpoint
            if (!response.ok) {
                throw new Error('Failed to fetch customers');
            }
            const data = await response.json();
            dispatch(fetchCustomersSuccess(data));
        } catch (error) {
            dispatch(fetchCustomersFailure(error.message));
        }
    };
};

