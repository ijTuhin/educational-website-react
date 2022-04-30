import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faFeed, faSignOut, faUser, faUserAltSlash } from '@fortawesome/free-solid-svg-icons'
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { iiucLogo } from '../../index';
import '../../index.css';
import auth from '../../Firebase.init';
import { signOut } from 'firebase/auth';
const StudentHeader = () => {
    const navigate = useNavigate();

    const handleLogOut = () => {
        signOut(auth)
        .then(() => {
            navigate('/student-login');
        })
    }
    return (
        <div className='sticky top-0 bg-indigo-900 text-white flex justify-between items-center w-full z-40 py-1'>
            <div className='my-4 text-lg flex justify-start items-center mx-4'>
                <img src={iiucLogo} className="w-14" alt="" />
                <nav className=' md:block hidden'>
                    <span className='nav'>
                        <Link className='mx-2 px-1 py-2 hover:text-green-600' to='/'><FontAwesomeIcon className='mb-0.5' icon={faUser}></FontAwesomeIcon> Student</Link>
                        <ul className='sub-nav bg-white mt-4 absolute top-12 left-20 px-3'>
                            <li className='text-slate-800 hover:text-green-600 decoration-4 hover:no-underline'>Section-1</li>
                            <li className='text-slate-800 hover:text-green-600 decoration-4 hover:no-underline'>Section-2</li>
                            <li className='text-slate-800 hover:text-green-600 decoration-4 hover:no-underline'>Section-3</li>
                            <li className='text-slate-800 hover:text-green-600 decoration-4 hover:no-underline'>Section-4</li>
                            <li className='text-slate-800 hover:text-green-600 decoration-4 hover:no-underline'>Section-5</li>
                        </ul>
                    </span>
                    <Link className='mx-2 px-1 hover:text-green-600 hover:underline-offset-8 decoration-4 hover:underline' to='/academics'><FontAwesomeIcon className='mb-0.5' icon={faFeed}></FontAwesomeIcon> TER</Link>
                    <Link className='mx-2 px-1 hover:text-green-600 hover:underline-offset-8 decoration-4 hover:underline' to='/courses'>Application</Link>
                    <Link className='mx-2 px-1 hover:text-green-600 hover:underline-offset-8 decoration-4 hover:underline' to='/campus'>IQAC</Link>
                    <Link className='mx-2 px-1 hover:text-green-600 hover:underline-offset-8 decoration-4 hover:underline' to='/search'>Others</Link>
                    <button onClick={handleLogOut} className='mx-2 px-1 transition duration-150 ease-in-out' to='/academics' data-bs-toggle="tooltip" data-bs-placement="bottom" title="Log Out"><FontAwesomeIcon icon={faSignOut}></FontAwesomeIcon></button>
                </nav>
            </div>
            <div className='my-4 text-lg font-semibold mx-5'>
                <h3 className='md:block hidden'><FontAwesomeIcon className='mb-0.5' icon={faUserAltSlash}></FontAwesomeIcon> User</h3>
                <nav className='block md:hidden'>
                    <span className='nav relative'>
                        <FontAwesomeIcon className='text-3xl' icon={faBars}></FontAwesomeIcon>
                        <ul className='sub-nav absolute top-6 right-0 border bg-white p-2 text-start'>
                            <li><h3 className='text-slate-800  font-thin text-sm'><FontAwesomeIcon className='mb-0.5' icon={faUserAltSlash}></FontAwesomeIcon> User</h3></li>
                            <li><Link className='text-slate-800  font-thin text-sm' to='/'><FontAwesomeIcon className='mb-0.5' icon={faUser}></FontAwesomeIcon> Student</Link></li>
                            <li><Link className='text-slate-800  font-thin text-sm' to='/academics'><FontAwesomeIcon className='mb-0.5' icon={faFeed}></FontAwesomeIcon> TER</Link></li>
                            <li><Link className='text-slate-800  font-thin text-sm' to='/academics'>Application</Link></li>
                            <li><Link className='text-slate-800  font-thin text-sm' to='/courses'>Courses</Link></li>
                            <li><Link className='text-slate-800  font-thin text-sm' to='/campus'>IQAC</Link></li>
                            <li><Link className='text-slate-800  font-thin text-sm' to='/search'>Others</Link></li>
                        </ul>
                    </span>
                </nav>
            </div>
        </div>
    );
};

export default StudentHeader;