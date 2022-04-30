import React from 'react';
import { Link } from 'react-router-dom';
import StudentFooter from '../StudentFooter/StudentFooter';
import StudentHeader from '../StudentHeader/StudentHeader';

const StudentPanel = () => {
    return (
        <div>
            <StudentHeader></StudentHeader>
            <div className='mb-48 grid grid-cols-4'>
                <div className="border mr-5 px-10">section-1</div>
                <div className="bg-white border col-span-3 pr-5 py-5">
                    <nav className='flex justify-between'>
                        <Link className='mx-2 py-1 px-2 hover:text-blue-900 hover:underline-offset-8 decoration-4 hover:underline' to='/academics'>Course Registration</Link>
                        <Link className='mx-2 py-1 px-2 hover:text-blue-900 hover:underline-offset-8 decoration-4 hover:underline' to='/academics'>Add/Drop</Link>
                        <Link className='mx-2 py-1 px-2 hover:text-blue-900 hover:underline-offset-8 decoration-4 hover:underline' to='/academics'>Withdraw</Link>
                        <Link className='mx-2 py-1 px-2 hover:text-blue-900 hover:underline-offset-8 decoration-4 hover:underline' to='/academics'>Payment History</Link>
                        <Link className='mx-2 py-1 px-2 hover:text-blue-900 hover:underline-offset-8 decoration-4 hover:underline' to='/academics'>Registration Summary</Link>
                        <Link className='mx-2 py-1 px-2 hover:text-blue-900 hover:underline-offset-8 decoration-4 hover:underline' to='/academics'>Result</Link>
                        <Link className='mx-2 py-1 px-2 hover:text-blue-900 hover:underline-offset-8 decoration-4 hover:underline' to='/academics'>Course Status</Link>
                        <Link className='mx-2 py-1 px-2 hover:text-blue-900 hover:underline-offset-8 decoration-4 hover:underline' to='/academics'>TER</Link>
                        <Link className='mx-2 py-1 px-2 hover:text-blue-900 hover:underline-offset-8 decoration-4 hover:underline' to='/academics'>Waiver</Link>
                        <Link className='mx-2 py-1 px-2 hover:text-blue-900 hover:underline-offset-8 decoration-4 hover:underline' to='/academics'>Profile</Link>
                    </nav>
                    <hr className='mx-3.5 my-1.5' />
                </div>
            </div>
            <StudentFooter></StudentFooter>
        </div>
    );
};

export default StudentPanel;