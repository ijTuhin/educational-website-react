import React from 'react';
import { Link } from 'react-router-dom';
import StudentFooter from '../StudentFooter/StudentFooter';
import StudentHeader from '../StudentHeader/StudentHeader';
import { user } from '../../index';

const StudentPanel = () => {
    return (
        <div>
            <StudentHeader></StudentHeader>
            <div className='bg-white md:bg-transparent flex flex-col md:grid md:grid-cols-5'>
                <div className='block bg-white border pr-0.5 py-5 md:hidden'>
                    <nav className='flex justify-center md:justify-between flex-wrap text-slate-400 text-base font-semibold'>
                        <Link className='mx-2 py-1 px-2 hover:text-blue-900 hover:underline-offset-8 decoration-4 hover:underline' to='/academics'>Course Registration</Link>
                        <Link className='mx-2 py-1 px-2 hover:text-blue-900 hover:underline-offset-8 decoration-4 hover:underline' to='/academics'>Add/Drop</Link>
                        <Link className='mx-2 py-1 px-2 hover:text-blue-900 hover:underline-offset-8 decoration-4 hover:underline' to='/academics'>Withdraw</Link>
                        <Link className='mx-2 py-1 px-2 hover:text-blue-900 hover:underline-offset-8 decoration-4 hover:underline' to='/academics'>Course Status</Link>
                        <Link className='mx-2 py-1 px-2 hover:text-blue-900 hover:underline-offset-8 decoration-4 hover:underline' to='/academics'>Registration Summary</Link>
                        <Link className='mx-2 py-1 px-2 hover:text-blue-900 hover:underline-offset-8 decoration-4 hover:underline' to='/academics'>Result</Link>
                        <Link className='mx-2 py-1 px-2 hover:text-blue-900 hover:underline-offset-8 decoration-4 hover:underline' to='/academics'>Payment History</Link>
                        <Link className='mx-2 py-1 px-2 hover:text-blue-900 hover:underline-offset-8 decoration-4 hover:underline' to='/academics'>Waiver</Link>
                        <Link className='mx-2 py-1 px-2 hover:text-blue-900 hover:underline-offset-8 decoration-4 hover:underline' to='/academics'>Password</Link>
                        <Link className='mx-2 py-1 px-2 hover:text-blue-900 hover:underline-offset-8 decoration-4 hover:underline' to='/academics'>Profile</Link>
                    </nav>
                </div>


                <div className="bg-slate-200 md:border mx-10 my-7 md:m-5 flex justify-center">
                    <div className='flex flex-col p-5 w-screen'>
                        <img className='w-48 py-5 mx-auto' src={user} alt="" />
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
                <div className="bg-white md:border col-span-4 pr-0.5 py-5">
                    <nav className='hidden md:flex md:justify-between flex-wrap text-slate-400 text-base font-semibold'>
                        <Link className='mx-2 py-1 px-2 hover:text-blue-900 hover:underline-offset-8 decoration-4 hover:underline' to='/academics'>Course Registration</Link>
                        <Link className='mx-2 py-1 px-2 hover:text-blue-900 hover:underline-offset-8 decoration-4 hover:underline' to='/academics'>Add/Drop</Link>
                        <Link className='mx-2 py-1 px-2 hover:text-blue-900 hover:underline-offset-8 decoration-4 hover:underline' to='/academics'>Withdraw</Link>
                        <Link className='mx-2 py-1 px-2 hover:text-blue-900 hover:underline-offset-8 decoration-4 hover:underline' to='/academics'>Course Status</Link>
                        <Link className='mx-2 py-1 px-2 hover:text-blue-900 hover:underline-offset-8 decoration-4 hover:underline' to='/academics'>Registration Summary</Link>
                        <Link className='mx-2 py-1 px-2 hover:text-blue-900 hover:underline-offset-8 decoration-4 hover:underline' to='/academics'>Result</Link>
                        <Link className='mx-2 py-1 px-2 hover:text-blue-900 hover:underline-offset-8 decoration-4 hover:underline' to='/academics'>Payment History</Link>
                        <Link className='mx-2 py-1 px-2 hover:text-blue-900 hover:underline-offset-8 decoration-4 hover:underline' to='/academics'>Waiver</Link>
                        <Link className='mx-2 py-1 px-2 hover:text-blue-900 hover:underline-offset-8 decoration-4 hover:underline' to='/academics'>Password</Link>
                        <Link className='mx-2 py-1 px-2 hover:text-blue-900 hover:underline-offset-8 decoration-4 hover:underline' to='/academics'>Profile</Link>
                    </nav>
                    <hr className='mx-3.5 my-1.5 md:block hidden' />
                    <div className='flex flex-col md:grid md:grid-cols-4 px-4 gap-x-2'>
                        <div className='col-span-3'>
                            <h1 className='text-center text-3xl font-serif md:text-start md:py-2 py-3'>Israt Jahan Tuhin</h1>
                            <div className='border-t-2 border-slate-300'>
                                <div className='flex justify-between text-sm font-semibold text-blue-700 mb-8 md:mb-0'>
                                    <h3>ID Number: C183275</h3>
                                    <h3 className='text-right'>Registration No: 0061830005203275</h3>
                                </div>
                                <div className='mx-1.5 text-center font-semibold font-serif mb-8 md:mb-0'>
                                    <div class="bg-blue-100 md:bg-blue-200 rounded py-3 px-6 my-4 text-sm text-blue-700 mb-3" role="alert">
                                        If GPA less than 2 in consecutive 3 semester, then your admission will cancel.
                                    </div>
                                    <div class="bg-purple-100 md:bg-purple-200 rounded py-3 px-6 my-4 text-sm text-purple-700 mb-3" role="alert">
                                        Achieving minimum GPA 2.00 in each Semester.
                                    </div>
                                </div>
                                <div className='border border-slate-100 shadow-md mb-10 md:mb-3'>
                                    <nav className='flex justify-start text-blue-500 text-xs font-bold mt-4'>
                                        <Link className='py-2.5 rounded px-2 hover:text-slate-400 border border-b-2 hover:border-b-0' to='/academics'>Overview</Link>
                                        <Link className='py-2.5 rounded px-2 hover:text-slate-400 border border-b-2 hover:border-b-0' to='/academics'>Contact</Link>
                                        <Link className='py-2.5 rounded px-2 hover:text-slate-400 border border-b-2 hover:border-b-0' to='/academics'>Academic</Link>
                                        <Link className='py-2.5 rounded px-2 hover:text-slate-400 border border-b-2 hover:border-b-0' to='/academics'>Advisor</Link>
                                        <Link className='py-2.5 rounded px-2 hover:text-slate-400 border border-b-2 hover:border-b-0' to='/academics'>Syllabus</Link>
                                    </nav>
                                    <h3 className='text-2xl font-serif'>Overview</h3>
                                    <div></div>
                                </div>
                            </div>
                        </div>
                        <div className='mx-3.5 mb-1 md:mb-0 md:mx-0'>
                            <div className='text-center text-lg text-green-600 font-serif font-semibold rounded-md flex flex-col justify-evenly h-40 my-2 bg-green-100 md:bg-green-200'>
                                <h2 className='text-xl'>Current CGPA</h2>
                                <h1 className='font-sans'>CGPA: 3.394</h1>
                            </div>
                            <div className='text-center text-lg text-purple-600 font-serif font-semibold rounded-md flex flex-col justify-evenly h-40 my-2 bg-purple-100 md:bg-purple-200'>
                                <h2 className='text-xl'>Required Credit Hours</h2>
                                <h1 className='font-sans'>163</h1>
                            </div>
                            <div className='text-center text-lg text-red-600 font-serif font-semibold rounded-md flex flex-col justify-evenly h-40 my-2 bg-red-100 md:bg-red-200'>
                                <h2 className='text-xl'>Minimum Degree Requirement</h2>
                                <h1 className='font-sans'>CGPA: 2.50</h1>
                            </div>
                            <div className='text-center text-lg text-orange-600 font-serif font-semibold rounded-md flex flex-col justify-evenly h-40 my-2 bg-orange-100 md:bg-orange-200'>
                                <h2 className='text-xl'>Outstanding Balance</h2>
                                <h1 className='font-sans'>0</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <StudentFooter></StudentFooter>
        </div>
    );
};

export default StudentPanel;