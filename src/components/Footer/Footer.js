import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/iiuc-logo.png';
import { facebook, google1, linkedin, youtube } from './../../index';
const Footer = () => {
    return (
        <div className='text-white flex flex-col justify-between bg-slate-900 w-full pt-8'>
            <div className='w-20 mx-auto pb-2'>
                <img src={logo} alt="" />
            </div>
            <div className='text-burlywood grid grid-cols-2 mx-auto md:mx-0 md:flex md:justify-evenly md:items-center'>
                <div className='flex flex-col'>
                    <h3 className='text-xl font-bold py-1'>IIUC</h3>
                    <ul>
                        <li>Section-1</li>
                        <li>Section-2</li>
                        <li>Section-3</li>
                        <li>Section-4</li>
                        <li>Section-5</li>
                        <li>Section-6</li>
                        <li>Section-7</li>
                        <li>Section-8</li>
                        <li>Section-9</li>
                    </ul>
                </div>
                <div className='flex flex-col'>
                    <h3 className='text-xl font-bold py-1'>Feature Link</h3>
                    <ul>
                        <li><Link to='./student-panel'>Student Web Panel</Link></li>
                        <li>Section-2</li>
                        <li>Section-3</li>
                        <li>Section-4</li>
                        <li>Section-5</li>
                        <li>Section-6</li>
                        <li>Section-7</li>
                        <li>Section-8</li>
                        <li>Section-9</li>
                    </ul>
                </div>
                <div className='flex flex-col'>
                    <h3 className='text-xl font-bold py-1'>Admission</h3>
                    <ul>
                        <li>Section-1</li>
                        <li>Section-2</li>
                        <li>Section-3</li>
                        <li>Section-4</li>
                        <li>Section-5</li>
                        <li>Section-6</li>
                        <li>Section-7</li>
                        <li>Section-8</li>
                        <li>Section-9</li>
                    </ul>
                </div>
                <div className='flex flex-col'>
                    <h3 className='text-xl font-bold py-1'>Resources</h3>
                    <ul>
                        <li>Section-1</li>
                        <li>Section-2</li>
                        <li>Section-3</li>
                        <li>Section-4</li>
                        <li>Section-5</li>
                        <li>Section-6</li>
                        <li>Section-7</li>
                        <li>Section-8</li>
                        <li>Section-9</li>
                    </ul>
                </div>
                <div className='flex flex-col'>
                    <h3 className='text-xl font-bold py-1'>Campus Life</h3>
                    <ul>
                        <li>Section-1</li>
                        <li>Section-2</li>
                        <li>Section-3</li>
                        <li>Section-4</li>
                        <li>Section-5</li>
                        <li>Section-6</li>
                        <li>Section-7</li>
                        <li>Section-8</li>
                        <li>Section-9</li>
                    </ul>
                </div>
                <div className='flex flex-col'>
                    <h3 className='text-xl font-bold py-1'>Important Links</h3>
                    <ul>
                        <li>Section-1</li>
                        <li>Section-2</li>
                        <li>Section-3</li>
                        <li>Section-4</li>
                        <li>Section-5</li>
                        <li>Section-6</li>
                        <li>Section-7</li>
                        <li>Section-8</li>
                        <li>Section-9</li>
                    </ul>
                </div>
            </div>
            <div className='flex justify-center pt-8'>
                <img className='w-6 mx-1 transition ease-in-out delay-50 duration-300 hover:translate-y-2 hover:rounded-full' src={facebook} alt="" />
                <img className='bg-white p-1 w-6 mx-1 transition ease-in-out delay-50 duration-300 hover:translate-y-2 hover:rounded-full' src={google1} alt="" />
                <img className='w-6 mx-1 transition ease-in-out delay-50 duration-300 hover:translate-y-2 hover:rounded-full' src={linkedin} alt="" />
                <img className='bg-white p-1 w-6 mx-1 transition ease-in-out delay-50 duration-300 hover:translate-y-2 hover:rounded-full' src={youtube} alt="" />
            </div>
            <div className='flex flex-col justify-center items-center py-4'>
                <div>
                    <button className='border rounded-sm text-sm px-2 mx-1 bg-burlywood hover:border-0'>Like</button>
                    <button className='border rounded-sm text-sm px-2 mx-1 bg-burlywood hover:border-0'>Share</button>
                </div>
                <h4 className='py-4 text-lg text-center font-semibold'>International Islamic University Chittagong | Kumira, Chattogram-4318 | +8802334461900-7</h4>
                <h4 className='pb-4 text-xs  text-center'>Copyright © 2022 All rights reserved IIUC and <span>Developed by</span> </h4>
            </div>
        </div>
    );
};

export default Footer;