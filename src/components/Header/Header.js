import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faSearch } from '@fortawesome/free-solid-svg-icons'
import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/iiuc-logo.png';
import './Header.css';
import '../../index.css';
const Header = () => {
    return (
        <div className='header w-screen absolute z-40'>
            <div className='my-4 text-lg flex justify-between items-center mx-4'>
                <img src={logo} className="w-14" alt="" />
                <nav className=' md:block hidden'>
                    <span className='nav'>
                        <Link className='mx-2 px-1 py-2 text-slate-900 hover:text-green-600' to='/'>Home</Link>
                        <ul className='sub-nav mt-4 absolute top-12 right-80 px-3'>
                            <li className='text-slate-600 hover:text-green-600 decoration-4 hover:no-underline'>Section-1</li>
                            <li className='text-slate-600 hover:text-green-600 decoration-4 hover:no-underline'>Section-2</li>
                            <li className='text-slate-600 hover:text-green-600 decoration-4 hover:no-underline'>Section-3</li>
                            <li className='text-slate-600 hover:text-green-600 decoration-4 hover:no-underline'>Section-4</li>
                            <li className='text-slate-600 hover:text-green-600 decoration-4 hover:no-underline'>Section-5</li>
                        </ul>
                    </span>
                    <Link className='mx-2 px-1 text-slate-900 hover:text-green-600 hover:underline-offset-8 decoration-4 hover:underline' to='/academics'>Academics</Link>
                    <Link className='mx-2 px-1 text-slate-900 hover:text-green-600 hover:underline-offset-8 decoration-4 hover:underline' to='/courses'>Courses</Link>
                    <Link className='mx-2 px-1 text-slate-900 hover:text-green-600 hover:underline-offset-8 decoration-4 hover:underline' to='/campus'>Campus</Link>
                    <Link className='mx-2 px-1 text-slate-900 hover:text-green-600 hover:underline-offset-8 decoration-4 hover:underline' to='/search'><FontAwesomeIcon icon={faSearch}></FontAwesomeIcon></Link>
                </nav>
                <nav className='block md:hidden'>
                    <span className='nav relative'>
                        <FontAwesomeIcon className='text-3xl' icon={faBars}></FontAwesomeIcon>
                        <ul className='sub-nav absolute top-6 right-0 border bg-slate-400 p-2 text-right'>
                            <li><Link className='hover:bg-slate-200  font-thin text-sm' to='/'>Home</Link></li>
                            <li><Link className='hover:bg-slate-200  font-thin text-sm' to='/academics'>Academics</Link></li>
                            <li><Link className='hover:bg-slate-200  font-thin text-sm' to='/courses'>Courses</Link></li>
                            <li><Link className='hover:bg-slate-200  font-thin text-sm' to='/campus'>Campus</Link></li>
                            <li><Link className='hover:bg-slate-200  font-thin text-sm text-slate-500' to='/search'><FontAwesomeIcon icon={faSearch}></FontAwesomeIcon></Link></li>
                        </ul>
                    </span>
                </nav>
            </div>
        </div>
    );
};

export default Header;