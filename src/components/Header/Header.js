import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/iiuc-logo.png';
import './Header.css';
import '../../index.css';
const Header = () => {
    return (
        <div className='header w-screen absolute z-40 bg-slate-50'>
            <div className='my-4 text-lg flex justify-between items-center mx-4'>
                <img src={logo} className="w-14" alt="" />
                <nav>
                    <Link className='nav mx-2 px-1 text-slate-900 hover:text-green-600' to='/'>Home
                        <ul className='sub-nav absolute bg-slate-400/10 px-3 mt-2'>
                            <li className='text-slate-900 hover:text-green-600 decoration-4 hover:no-underline'>Section-1</li>
                            <li className='text-slate-900 hover:text-green-600 decoration-4 hover:no-underline'>Section-2</li>
                            <li className='text-slate-900 hover:text-green-600 decoration-4 hover:no-underline'>Section-3</li>
                            <li className='text-slate-900 hover:text-green-600 decoration-4 hover:no-underline'>Section-4</li>
                            <li className='text-slate-900 hover:text-green-600 decoration-4 hover:no-underline'>Section-5</li>
                        </ul>
                    </Link>
                    <Link className='mx-2 px-1 text-slate-900 hover:text-green-600 hover:underline-offset-8 decoration-4 hover:underline' to='/academics'>Academics</Link>
                    <Link className='mx-2 px-1 text-slate-900 hover:text-green-600 hover:underline-offset-8 decoration-4 hover:underline' to='/courses'>Courses</Link>
                    <Link className='mx-2 px-1 text-slate-900 hover:text-green-600 hover:underline-offset-8 decoration-4 hover:underline' to='/campus'>Campus</Link>
                    <Link className='mx-2 px-1 text-slate-900 hover:text-green-600 hover:underline-offset-8 decoration-4 hover:underline' to='/search'><FontAwesomeIcon icon={faSearch}></FontAwesomeIcon></Link>
                </nav>
            </div>
        </div>
    );
};

export default Header;