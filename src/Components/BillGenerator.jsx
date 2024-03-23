import React, { useState } from 'react';
import { connect } from 'react-redux';
import SideNav from './SideNav';
import { useNavigate } from 'react-router-dom';
import { addCustomer } from '../Store/Actions/BillCreator';

const BillGenerator = ({ addCustomer }) => {
    const [fields, setFields] = useState([
        { name: '', quantity: '', price: '', totalPrice: '' },
    ]);
    const [customerName, setCustomerName] = useState('');
    const [customerMobile, setCustomerMobile] = useState('');
    const [customerAddress, setCustomerAddress] = useState('');
    const [billingDate, setBillingDate] = useState('');
    const [validationErrors, setValidationErrors] = useState({});
    const navigate = useNavigate();

    const handleAddField = () => {
        setFields([...fields, { name: '', quantity: '', price: '', totalPrice: '' }]);
    };

    const validate = () => {
        const errors = {};
        if (!customerName.trim()) {
            errors.customerName = 'Customer name is required';
        }
        if (!customerMobile.trim()) {
            errors.customerMobile = 'Customer mobile number is required';
        } else if (!/^\d+$/.test(customerMobile.trim())) {
            errors.customerMobile = 'Please enter a valid mobile number';
        }
        if (!customerAddress.trim()) {
            errors.customerAddress = 'Customer address is required';
        }
        if (!billingDate.trim()) {
            errors.billingDate = 'Billing date is required';
        }
        const productErrors = fields.map((field, index) => {
            const productError = {};
            if (!field.name.trim() || !field.quantity.trim() || !field.price.trim() || !field.totalPrice.trim()) {
                productError[index] = 'All product fields are required';
            }
            return productError;
        });
        productErrors.forEach(error => {
            Object.keys(error).forEach(key => {
                errors[`product-${key}`] = error[key];
            });
        });
        setValidationErrors(errors);
        return Object.keys(errors).length === 0;
    };
    const handleFieldChange = (index, key, value) => {
        const updatedFields = [...fields];
        updatedFields[index][key] = value;
        
        // Calculate total price if both quantity and price are entered
        if (key === 'quantity' || key === 'price') {
            const quantity = parseFloat(updatedFields[index].quantity);
            const price = parseFloat(updatedFields[index].price);
            if (!isNaN(quantity) && !isNaN(price)) {
                updatedFields[index].totalPrice = (quantity * price).toFixed(2);
            } else {
                updatedFields[index].totalPrice = '';
            }
        }

        setFields(updatedFields);
    };

    const postData = async (e) => {
        e.preventDefault();
        if (validate()) {
            try {
                const billData = {
                    customerName,
                    customerMobile,
                    customerAddress,
                    billingDate,
                    products: fields
                };
                addCustomer(billData);
                navigate("/success");
            } catch (error) {
                console.error('Error:', error);
            }
        }
    };


    return (
        <div className="bill-generator container">
            <h2 className="mb-4 bg-dark text-light p-2">Bill Generator</h2>
            <div className="row">
                <div className="col-3">{<SideNav />}</div>
                <div className="col-9">
                    <div className="bill-form">
                        <form onSubmit={postData}>
                            <div className="mb-3">
                                <input type="text" className={`form-control ${validationErrors.customerName ? 'is-invalid' : ''}`} placeholder="Customer Name" value={customerName} onChange={(e) => setCustomerName(e.target.value)} />
                                {validationErrors.customerName && <div className="invalid-feedback">{validationErrors.customerName}</div>}
                            </div>
                            <div className="mb-3">
                                <input type="text" className={`form-control ${validationErrors.customerMobile ? 'is-invalid' : ''}`} placeholder="Customer Mobile Number" value={customerMobile} onChange={(e) => setCustomerMobile(e.target.value)} />
                                {validationErrors.customerMobile && <div className="invalid-feedback">{validationErrors.customerMobile}</div>}
                            </div>
                            <div className="mb-3">
                                <input type="text" className={`form-control ${validationErrors.customerAddress ? 'is-invalid' : ''}`} placeholder="Customer Address" value={customerAddress} onChange={(e) => setCustomerAddress(e.target.value)} />
                                {validationErrors.customerAddress && <div className="invalid-feedback">{validationErrors.customerAddress}</div>}
                            </div>
                            <div className="mb-3">
                                <input type="date" className={`form-control ${validationErrors.billingDate ? 'is-invalid' : ''}`} placeholder="Billing Date" value={billingDate} onChange={(e) => setBillingDate(e.target.value)} />
                                {validationErrors.billingDate && <div className="invalid-feedback">{validationErrors.billingDate}</div>}
                            </div>
                            {fields.map((field, index) => (
                                <div key={index} className="row g-3">
                                    <div className="col">
                                        <input type="text" className={`form-control ${validationErrors[`product-${index}`] ? 'is-invalid' : ''}`} placeholder="Product Name" value={field.name} onChange={(e) => handleFieldChange(index, 'name', e.target.value)} />
                                        {validationErrors[`product-${index}`] && <div className="invalid-feedback">{validationErrors[`product-${index}`]}</div>}
                                    </div>
                                    <div className="col">
                                        <input type="tel" className={`form-control ${validationErrors[`product-${index}`] ? 'is-invalid' : ''}`} placeholder="Product Quantity" value={field.quantity} onChange={(e) => handleFieldChange(index, 'quantity', e.target.value)} />
                                        {validationErrors[`product-${index}`] && <div className="invalid-feedback">{validationErrors[`product-${index}`]}</div>}
                                    </div>
                                    <div className="col">
                                        <input type="tel" className={`form-control ${validationErrors[`product-${index}`] ? 'is-invalid' : ''}`} placeholder="Product Price" value={field.price} onChange={(e) => handleFieldChange(index, 'price', e.target.value)} />
                                        {validationErrors[`product-${index}`] && <div className="invalid-feedback">{validationErrors[`product-${index}`]}</div>}
                                    </div>
                                    <div className="col">
                                        <input type="tel" className={`form-control`} placeholder="Total Price" value={field.totalPrice} readOnly />
                                    </div>
                                </div>
                            ))}
                            <div className="row">
                                <div className="mb-3 col-6">
                                    <button type="button" className="btn btn-primary w-100" onClick={handleAddField}>Add Product</button>
                                </div>
                                <div className="mb-3 col-6">
                                    <button type="submit" className="btn bg-success w-100">Submit</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
   
};

// const mapDispatchToProps = (dispatch) => ({
//     addCustomer: (customerData) => dispatch(addCustomer(customerData)),
// });
export default connect(null, { addCustomer })(BillGenerator);
// export default connect(null, mapDispatchToProps)(BillGenerator);
