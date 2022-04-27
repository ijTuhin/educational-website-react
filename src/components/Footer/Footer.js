import React from 'react';
import logo from '../../images/iiuc-logo.png';
import { facebook, google, linkedin, youtube } from './../../index';
import './Footer.css';
const Footer = () => {
    return (
        <div className='flex flex-col justify-between bg-slate-900 w-full py-8'>
            <div className='w-20 mx-auto'>
                <img src={logo} alt="" />
            </div>
            <div className='text-white text-burlywood flex flex-row justify-evenly items-center'>
                <div className='flex flex-col'>
                    <h3>IIUC</h3>
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
                    <h3>IIUC</h3>
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
                    <h3>IIUC</h3>
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
                    <h3>IIUC</h3>
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
                    <h3>IIUC</h3>
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
                    <h3>IIUC</h3>
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
                <img className='w-6 mx-2 transition ease-in-out delay-50 duration-300 hover:translate-y-2 hover:rounded-full' src={facebook} alt="" />
                <img className='bg-white p-1 w-6 mx-2 transition ease-in-out delay-50 duration-300 hover:translate-y-2 hover:rounded-full' src={google} alt="" />
                <img className='w-6 mx-2 transition ease-in-out delay-50 duration-300 hover:translate-y-2 hover:rounded-full' src={linkedin} alt="" />
                <img className='bg-white p-1 w-6 mx-2 transition ease-in-out delay-50 duration-300 hover:translate-y-2 hover:rounded-full' src={youtube} alt="" />
            </div>
        </div>
    );
};

export default Footer;