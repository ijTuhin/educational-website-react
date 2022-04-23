import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
const Header = () => {
    return (
        <div>
            <Link to='/'>Home</Link>
            <Link to='/academics'>Academics</Link>
            <Link to='/courses'>Courses</Link>
            <Link to='/campus'>Campus</Link>
            <Link to='/search'>Search</Link>
        </div>
    );
};

export default Header;