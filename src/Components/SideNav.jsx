import React from 'react'
import { Link } from 'react-router-dom';

export default function SideNav() {
    return (
        // <div className="sidenav bg-dark">
        //     <ul>
        //         <li>Customers List</li>
        //         <li>Bill Generator</li>
        //     </ul>
        // </div>


        <div class="list-group">
            <Link to="#" class="list-group-item list-group-item-action active" aria-current="true">
                Item
            </Link>
            <Link to="/bill" class="list-group-item list-group-item-action">Bill Generator</Link>
            <Link to="/customer" class="list-group-item list-group-item-action">Customer List</Link>
        </div>

    );
};

