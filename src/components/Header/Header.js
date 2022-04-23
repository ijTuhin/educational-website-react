import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import '../../index.css';
const Header = () => {
    return (
        <div className='my-4 text-lg '>
            <Link className='mx-2 text-slate-500 hover:text-green-600 hover:underline-offset-8 decoration-4 hover:underline' to='/'>Home</Link>
            <Link className='mx-2 text-slate-500 hover:text-green-600 hover:underline-offset-8 decoration-4 hover:underline' to='/academics'>Academics</Link>
            <Link className='mx-2 text-slate-500 hover:text-green-600 hover:underline-offset-8 decoration-4 hover:underline' to='/courses'>Courses</Link>
            <Link className='mx-2 text-slate-500 hover:text-green-600 hover:underline-offset-8 decoration-4 hover:underline' to='/campus'>Campus</Link>
            <Link className='mx-2 text-slate-500 hover:text-green-600 hover:underline-offset-8 decoration-4 hover:underline' to='/search'><FontAwesomeIcon icon={faSearch}></FontAwesomeIcon></Link>
        </div>
    );
};

export default Header;