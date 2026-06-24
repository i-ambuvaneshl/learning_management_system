import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <nav className="navbar">
            <h2 className="navbar-brand">LMS Lite</h2>
            <div className="nav-links">
                <Link to="/">Home</Link>
                <Link to="/courses">Courses</Link>
                <Link to="/add">Add Course</Link>
            </div>
        </nav>
    );
}

export default Navbar;
