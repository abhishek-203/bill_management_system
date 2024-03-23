import React from 'react';
import SideNav from './SideNav';

export default function SuccessPage() {
    return (
        <div className="container mt-3">
            <h2 className="mb-4 bg-dark text-light text-center p-2">Successfull</h2>

            <div className="row justify-content-center">
                <div className="row">
                    <div className="col-3">
                        {<SideNav />}
                    </div>
                    <div className="col-9">

                        <div className="col-md-6">
                            <div className="card">
                                <div className="card-body">
                                    <h2 className="card-title">Success!</h2>
                                    <p className="card-text">Bill data has been successfully added to the customers list.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}





// import React from 'react';

// const SuccessPage = () => {
//     return (
//         <div className="modal">
//             <div className="modal-content">
//                 {/* <span className="close" onClick={onClose}>&times;</span> */}
//                 <h2>Success!</h2>
//                 <p>Bill data has been successfully added to the customers list.</p>
//             </div>
//         </div>
//     );
// };

// export default SuccessPage;
