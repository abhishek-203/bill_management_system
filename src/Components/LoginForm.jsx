import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';


const LoginForm = () => {
    // let 
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState({});
    let navigate = useNavigate()


    const validateForm = () => {
        const errors = {};
        if (!email) {
            errors.email = 'Email is required';
        }
        if (!password) {
            errors.password = 'Password is required';
        }
        setErrors(errors);
        return Object.keys(errors).length === 0;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (validateForm()) {
            // Perform sign up logic
            // let response = await fetch("http://localhost:7000/login", {
            //     method: "POST",
            //     headers: {
            //         "content-type": "application/json"
            //     },
            //     body: JSON.stringify({ email: email.current, password: password.current })
            // });
            // response = await response.json();
            // if (response)
                navigate("/bill");
        } else {
            console.log('Perform sign up with:', email, password,);
            
        }
    };
    
    return (
        <section className="">
            <div className="px-4 py-5 px-md-5 text-center text-lg-start" style={{ backgroundColor: 'hsl(0, 0%, 96%)' }}>
                <div className="container">
                    <div className="row gx-lg-5 align-items-center">
                        <div className="col-lg-6 mb-1 mb-lg-0">
                            <h1 className="my-5 display-3 fw-bold ls-tight">
                                Bill Management <br />
                                <span className="text-primary">System</span>
                            </h1>
                        </div>

                        <div className="col-lg-6 mb-0 mb-lg-0 bg-dark">
                            <div className="card">
                                <div className="card-body py-5 px-md-5">
                                    <form onSubmit={handleSubmit}>
                                        {/* Email input */}
                                        <div className="form-outline mb-4">
                                            <label className="form-label" htmlFor="form3Example3">Email address</label>
                                            <input
                                                type="email"
                                                id="form3Example3"
                                                className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                                                value={email}
                                                onChange={(e) => setEmail(e.target.value)}
                                            />
                                            {errors.email && <div className="invalid-feedback">{errors.email}</div>}
                                        </div>

                                        {/* Password input */}
                                        <div className="form-outline mb-4">
                                            <label className="form-label" htmlFor="form3Example4">Password</label>
                                            <input
                                                type="password"
                                                id="form3Example4"
                                                className={`form-control ${errors.password ? 'is-invalid' : ''}`}
                                                value={password}
                                                onChange={(e) => setPassword(e.target.value)}
                                            />
                                            {errors.password && <div className="invalid-feedback">{errors.password}</div>}
                                        </div>


                                        {/* Submit button */}
                                        <button type="submit" className="btn btn-primary btn-block mb-4 w-100">
                                           Login
                                        </button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default LoginForm;



