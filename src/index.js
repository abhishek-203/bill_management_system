import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import store from "./Store/Store";
import { Provider } from "react-redux";

// const root = ReactDOM.createRoot(document.getElementById("root"));

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
    <>
        <Provider store={store}>
            <App />
        </Provider>
    </>
)

// ReactDOM.render(
//   <Provider store={store}>
//     <App />
//   </Provider>,
//   document.getElementById("root")
// );

    // root.render(
    //   <>
    //   <App/>
    //   </>
    // );
    
    // import React from 'react';
    // import ReactDOM from 'react-dom';
    // import { Provider } from 'react-redux';
    // import store from './store'; // Import your Redux store
    // import App from './App'; // Your root component