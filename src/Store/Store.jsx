import { createStore } from '@reduxjs/toolkit';
import customerReducer from './Reducer/BillCreatorReducer';

const store = createStore(customerReducer);
// const store = configureStore(customerReducer);

export default store;
