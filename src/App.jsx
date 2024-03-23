import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import LoginForm from './Components/LoginForm'
import BillGenerator from './Components/BillGenerator'
import CustomerList from './Components/CustomerList'
import SuccessPage from './Components/SuccessPage'
import Navbar from './Components/Navbar'


export default function App() {
    return (
        <BrowserRouter>
            <Navbar/>
            <Routes>

                <Route path='/' element={<LoginForm />} />
                <Route path='/bill' element={<BillGenerator />} />
                <Route path='/customer' element={<CustomerList />} />
                <Route path='/success' element={<SuccessPage/>}></Route>
            </Routes>
        </BrowserRouter>
    )
}
