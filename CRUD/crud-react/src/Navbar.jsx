import React from 'react';
import { Link } from 'react-router-dom'; // Assuming you are using React Router

const Navbar = () => {
    return (
        <nav>

            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/add">Add</Link>
            </li>
            <li>
                <Link to="/delete">Delete</Link>
            </li>
            <li>
                <Link to="/edit">Edit</Link>
            </li>
            <li>
                <Link to="/view">View</Link>
            </li>

        </nav>
    );
};

export default Navbar;