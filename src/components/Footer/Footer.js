import React from 'react';
import logo from '../../images/iiuc-logo.png';
import './Footer.css';
const Footer = () => {
    return (
        <div className='flex flex-col items-center bg-slate-900 w-screen h-96'>
            <div className='w-20'>
                <img src={logo} alt="" />
            </div>
            <div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
            <div></div>
        </div>
    );
};

export default Footer;