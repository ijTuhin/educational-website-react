import React from 'react';
import { Link } from 'react-router-dom';
import StudentFooter from '../StudentFooter/StudentFooter';
import StudentHeader from '../StudentHeader/StudentHeader';
import { user } from '../../index';

const StudentPanel = () => {
    return (
        <div>
            <StudentHeader></StudentHeader>
            <div className='mb-48 grid grid-cols-5'>
                <div className="bg-slate-200 border mx-5 mt-5 flex justify-center">
                    <div className='flex flex-col p-5 w-screen'>
                        <img className='w-48 py-5' src={user} alt="" />
                        <div className='text-start text-xs pt-2'>
                            <h6> 01316797638</h6>
                            <h6> isratishu0209@gmail.com</h6>
                            <h6> Nur Nahar Menson ### Karompara ### Khaja Road ### ### Chandgaon ### Chandgaon ### Chattogram</h6>
                            <h6> Max Semester: 12</h6>
                            <h6> Siblings:</h6>
                            <h6> Transport: Bahaddarhat Bus Terminal</h6>
                            <h6> Transport Route: Bahaddarhat Bus Terminal</h6>
                            <br /><br />
                            <h6> Hajera Taju Degree College</h6>
                            <br /><br />
                            <h6> Areas of Study</h6>
                            <h6>
                                Bachelor of Science in Computer Science and Engineering</h6>
                        </div>
                    </div>
                </div>
                <div className="bg-white border col-span-4 pr-5 py-5">
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