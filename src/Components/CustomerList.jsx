// import React, { useEffect } from 'react';
// import { connect } from 'react-redux';

// import SideNav from './SideNav';
// import {customers, fetchCustomers } from '../Store/Actions/CustomerAction';

// const CustomerList = ({ customers, fetchCustomers }) => {
//     useEffect(() => {
//         fetchCustomers(); // Fetch customers when the component mounts
//     }, [fetchCustomers]);

//     return (
//         <div className="customer-table container">
//             <h2 className='text-center text-light mb-4 bg-dark p-2'>Customers List</h2>
//             <div className="row">
//                 <div className="col-3">
//                     <SideNav />
//                 </div>
//                 <div className="col-9">
//                     <table className="table table-striped">
//                         <thead className='bg-info'>
//                             <tr>
//                                 <th>Name</th>
//                                 <th>Quantity</th>
//                                 <th>Billing Date</th>
//                                 <th>Contact</th>
//                                 <th>Address</th>
//                                 <th>Price</th>
//                             </tr>
//                         </thead>
//                         <tbody>
//                             {customers.map((customer, index) => (
//                                 <tr key={index}>
//                                     <td>{customer.name}</td>
//                                     <td>{customer.quantity}</td>
//                                     <td>{customer.billingDate}</td>
//                                     <td>{customer.contact}</td>
//                                     <td>{customer.address}</td>
//                                     <td>{customer.price}</td>
//                                 </tr>
//                             ))}
//                         </tbody>
//                     </table>
//                 </div>
//             </div>
//         </div>
//     );
// };

// const mapStateToProps = (state) => ({
//     customers: state.customer.customers // Assuming your Redux store has a slice named 'customer' with a 'customers' property
// });

// const mapDispatchToProps = (dispatch) => ({
//     fetchCustomers: () => dispatch(fetchCustomers()) // Dispatch fetchCustomers action creator
// });

// export default connect(mapStateToProps, mapDispatchToProps)(CustomerList);









// import React from 'react';
// import { connect } from 'react-redux'; // Import connect function
// import SideNav from './SideNav';
// // import { customers } from '../Store/Actions/CustomerAction';


// const CustomerList = ({ customers }) => {
//     return (
//         <div className="customer-table container ">
//             <h2 className='text-center text-light mb-4 bg-dark p-2'>Customers List</h2>
//             <div className="row">
//                 <div className="col-3">
//                     {<SideNav />}
//                 </div>
//                 <div className="col-9">
//                     <table className="table table-striped">
//                         <thead className='bg-info'>
//                             <tr>
//                                 <th>Name</th>
//                                 <th>Quantity</th>
//                                 <th>Billing Date</th>
//                                 <th>Contact</th>
//                                 <th>Address</th>
//                                 <th>Price</th>
//                             </tr>
//                         </thead>
//                         <tbody>
//                             {customers.map((customer, index) => (
//                                 <tr key={index}>
//                                     <td>{customer.name}</td>
//                                     <td>{customer.quantity}</td>
//                                     <td>{customer.billingDate}</td>
//                                     <td>{customer.contact}</td>
//                                     <td>{customer.address}</td>
//                                     <td>{customer.price}</td>
//                                 </tr>
//                             ))}
//                         </tbody>
//                     </table>
//                 </div>
//             </div>
//         </div>
//     );
// };

// // Define mapStateToProps function to map Redux state to component props
// const mapStateToProps = (state) => ({
//     customers: state.customer.customers // Assuming your Redux store has a slice named 'customer' with a 'customers' property
// });

// // Connect the component to Redux store
// export default connect(mapStateToProps)(CustomerList);











import React from 'react';
import SideNav from './SideNav';

const CustomerList = () => {
    // Dummy data for demonstration
    const customers = [
        { name: 'John Doe', quantity: 5, billingDate: '2024-03-20', contact: '1234567890', address: '123 Main St', price: 100 },
        // More customer data...
    ];

    return (
        <div className="customer-table container ">
            <h2 className='text-center text-light mb-4 bg-dark p-2'>Customers List</h2>
            <div className="row">
                <div className="col-3">
                    {<SideNav />}
                </div>
                <div className="col-9">
                    <table className="table table-striped">
                        <thead className='bg-info'>
                            <tr>
                                <th>Name</th>
                                <th>Quantity</th>
                                <th>Billing Date</th>
                                <th>Contact</th>
                                <th>Address</th>
                                <th>Price</th>
                            </tr>
                        </thead>
                        <tbody>
                            {customers.map((customer, index) => (
                                <tr key={index}>
                                    <td>{customer.name}</td>
                                    <td>{customer.quantity}</td>
                                    <td>{customer.billingDate}</td>
                                    <td>{customer.contact}</td>
                                    <td>{customer.address}</td>
                                    <td>{customer.price}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};
export default CustomerList;
